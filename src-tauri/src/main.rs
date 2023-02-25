#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

fn main() {
    let quit_menu_item = CustomMenuItem::new("quit".to_string(), "Quit");
    let file_submenu = Submenu::new("File", Menu::new().add_item(quit_menu_item));
    let font_hobbit = CustomMenuItem::new("hobbit".to_string(), "Hobbit");
    let font_classic = CustomMenuItem::new("classic".to_string(), "Classic");
    let font_submenu = Submenu::new(
        "Font",
        Menu::new().add_item(font_hobbit).add_item(font_classic),
    );
    let settings_submenu = Submenu::new("Setting", Menu::new().add_submenu(font_submenu));
    let about_menu_item = CustomMenuItem::new("about".to_string(), "About...");
    let menu = Menu::new()
        .add_submenu(file_submenu)
        .add_submenu(settings_submenu)
        .add_item(about_menu_item);
    tauri::Builder::default()
        .menu(menu)
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
