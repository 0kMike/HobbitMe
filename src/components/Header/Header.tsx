import {JSX} from "solid-js";
import styles from "./Header.module.scss";

export default function Header(): JSX.Element {
  return <header class={styles.header}>
    <section>HobbitMe!</section>
    <section></section>
    <section></section>
  </header>
}