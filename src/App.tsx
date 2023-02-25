import {createSignal} from "solid-js";
import {invoke} from "@tauri-apps/api/tauri";
import styles from "App.scss"
import "./App.css";

function App() {
    const [greetMsg, setGreetMsg] = createSignal("");
    const [name, setName] = createSignal("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
        setGreetMsg(await invoke("greet", {name: name()}));
    }

    return (
        <main class={styles.}>

        </main>
    );
}

export default App;
