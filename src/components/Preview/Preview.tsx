import { JSX } from 'solid-js';
import styles from './Preview.module.scss';
import Canvas from './Canvas/Canvas';

export default function Preview(): JSX.Element {
  return (
    <section class={styles.preview}>
      <div></div>
      <div class={styles.avatar}>
        <Canvas />
        <button>download</button>
      </div>
      <div class={styles.actions}>
      </div>
    </section>
  );
}
