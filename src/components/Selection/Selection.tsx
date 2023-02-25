import { JSX } from 'solid-js';
import styles from './Selection.module.scss';
import LayerSelection from './LayerSelection/LayerSelection';
import ItemSelection from './ItemSelection/ItemSelection';

export default function Selection(): JSX.Element {
  return (
    <section class={styles.selection}>
      <LayerSelection />
      <ItemSelection />
    </section>
  );
}
