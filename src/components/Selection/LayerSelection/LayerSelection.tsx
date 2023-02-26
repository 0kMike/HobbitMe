import { For, JSX } from 'solid-js';
import {setSelectedUserLayer, userLayers} from '../../../providers/layer.provider';
import styles from './LayerSelection.module.scss';

export default function LayerSelection(): JSX.Element {
  return (
    <div class={styles.buttons}>
      <For each={userLayers} fallback={<span>loading...</span>}>
        {(layer) => <button onclick={() => setSelectedUserLayer(layer)}>{layer}</button>}
      </For>
    </div>
  );
}
