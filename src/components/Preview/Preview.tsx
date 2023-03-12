import { JSX } from 'solid-js';
import styles from './Preview.module.scss';
import Canvas from './Canvas/Canvas';

export default function Preview(): JSX.Element {
  return (
    <section class={styles.preview}>
      <div class={styles.avatar}>
        <Canvas />
      </div>
      <div class={styles.actions}>
        <button>download</button>
      </div>
    </section>
  );
}
