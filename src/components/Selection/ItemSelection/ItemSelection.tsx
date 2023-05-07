import { For, JSX } from 'solid-js';
import styles from './ItemSelection.module.scss';
import {
  getFilesNamesByLayer,
  getSelectedUserLayer,
} from '../../../providers/layer.provider';
import { getColorPickersByLayer } from '../../../providers/color.provider';
import ColorPicker from './ColorPicker/ColorPicker';
import ItemSVG from './ItemSVG/ItemSVG';

export default function ItemSelection(): JSX.Element {
  return (
    <section class={styles.wrapper}>
      <div class={styles.items}>
        <For each={getFilesNamesByLayer()}>
          {(item) => (
            <ItemSVG itemLayer={getSelectedUserLayer()} itemFileName={item} />
          )}
        </For>
      </div>
      <div class={styles.colors}>
        <For each={getColorPickersByLayer(getSelectedUserLayer())}>
          {(colorPicker) => <ColorPicker colorPicker={colorPicker} />}
        </For>
      </div>
    </section>
  );
}
