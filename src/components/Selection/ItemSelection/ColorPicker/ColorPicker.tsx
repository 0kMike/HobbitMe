import { JSX, Match, Switch } from 'solid-js';
import styles from './ColorPicker.module.scss';
import {
    getBrowColor,
    getEyeColor,
    getFrameColor,
    getGlassColor,
    getHairColor,
    getLipColor,
    getMainOutfitColor,
    getSecondaryOutfitColor,
    getSkinColor,
    getTertiaryOutfitColor, setTertiaryOutfitColor,
} from '../../../../providers/color.provider';

export interface ColorPickerProps {
  colorPicker: string;
}

export default function ColorPicker(props: ColorPickerProps): JSX.Element {
  return (
    <div class={styles.picker}>
      <p>{props.colorPicker}</p>
      <Switch fallback={<></>}>
        <Match when={props.colorPicker === 'hair color'} keyed>
          <input type='color' value={getHairColor()} class={styles.selector} />
        </Match>
        <Match when={props.colorPicker === 'skin color'} keyed>
          <input type='color' value={getSkinColor()} class={styles.selector} />
        </Match>
        <Match when={props.colorPicker === 'brow color'} keyed>
          <input type='color' value={getBrowColor()} class={styles.selector} />
        </Match>
        <Match when={props.colorPicker === 'eye color'} keyed>
          <input type='color' value={getEyeColor()} class={styles.selector} />
        </Match>
        <Match when={props.colorPicker === 'frame color'} keyed>
          <input type='color' value={getFrameColor()} class={styles.selector} />
        </Match>
        <Match when={props.colorPicker === 'glass color'} keyed>
          <input type='color' value={getGlassColor()} class={styles.selector} />
        </Match>
        <Match when={props.colorPicker === 'lip color'} keyed>
          <input type='color' value={getLipColor()} class={styles.selector} />
        </Match>
        <Match when={props.colorPicker === 'facial hair color'} keyed>
          <input type='color' value={getHairColor()} class={styles.selector} />
        </Match>
        <Match when={props.colorPicker === 'primary outfit color'} keyed>
          <input
            type='color'
            value={getMainOutfitColor()}
            class={styles.selector}
          />
        </Match>
        <Match when={props.colorPicker === 'secondary outfit color'} keyed>
          <input
            type='color'
            value={getSecondaryOutfitColor()}
            class={styles.selector}
          />
        </Match>
        <Match when={props.colorPicker === 'tertiary outfit color'} keyed>
          <input
            type='color'
            value={getTertiaryOutfitColor()}
            class={styles.selector}
            onchange={(e) => setTertiaryOutfitColor(e.currentTarget.value)}
          />
        </Match>
      </Switch>
    </div>
  );
}
