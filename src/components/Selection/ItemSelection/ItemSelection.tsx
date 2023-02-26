import { For, JSX } from 'solid-js';
import styles from './ItemSelection.module.scss';
import { getFilesNamesByLayer } from '../../../providers/layer.provider';
import * as url from 'url';

export default function ItemSelection(): JSX.Element {
  const items = getFilesNamesByLayer();

  return (
    <section class={styles.wrapper}>
      <For each={items}>
        {(item) => (
          <div>
            <span>{item}</span>
            <img
              src={`src/assets/avatarLayers/${item}`}
              alt='an image showing part of a hobbit'
            />
          </div>
        )}
      </For>
    </section>
  );
}
