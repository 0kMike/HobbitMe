import { JSX } from 'solid-js';
import styles from './App.module.scss';
import Preview from './components/Preview/Preview';
import Selection from './components/Selection/Selection';
import Header from "./components/Header/Header";

export default function App(): JSX.Element {
  return (
      <main class={styles.main}>
        <Selection />
        <Preview />
      </main>
  );
}