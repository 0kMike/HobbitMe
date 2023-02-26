import { For, JSX } from 'solid-js';
import styles from './ItemSelection.module.scss';
import {
  getFilesNamesByLayer,
  getSelectedUserLayer,
  mapUserLayer,
} from '../../../providers/layer.provider';
import { getColorPickersByLayer } from '../../../providers/color.provider';

export default function ItemSelection(): JSX.Element {
  return (
    <section class={styles.wrapper}>
      <div class={styles.items}>
        <For each={getFilesNamesByLayer()}>
          {(item) => (
            <>
              <img
                src={`src/assets/avatarLayers/${mapUserLayer(
                  getSelectedUserLayer()
                )}/${item}`}
                class={styles.image}
                alt='an image showing part of a hobbit'
              />
            </>
          )}
        </For>
      </div>
      <div class={styles.colors}>
        <For each={getColorPickersByLayer(getSelectedUserLayer())}>
          {(colorPicker) => (
            <div class={styles.picker}>
              <p>{colorPicker}</p>
              <input type='color' class={styles.selector}/>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}
