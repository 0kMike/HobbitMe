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
  getFacialHairColor,
  getTertiaryOutfitColor,
  setSecondaryOutfitColor,
  setHairColor,
  setTertiaryOutfitColor,
  setSkinColor,
  setBrowColor,
  setEyeColor,
  setFrameColor,
  setGlassColor,
  setLipColor,
  setFacialHairColor,
  setMainOutfitColor,
} from '../../../../providers/color.provider';

export interface ColorPickerProps {
  colorPicker: string;
}

export default function ColorPicker(props: ColorPickerProps): JSX.Element {
  const triggerColorPicker = (e: MouseEvent) => {
    ((e.currentTarget as HTMLElement).children.item(1) as HTMLElement).click();
  };

  return (
    <div class={styles.picker} onclick={(e) => triggerColorPicker(e)}>
      <p>{props.colorPicker}</p>
      <Switch fallback={<>Loading...</>}>
        <Match when={props.colorPicker === 'hair color'} keyed>
          <input
            type='color'
            value={getHairColor()}
            class={styles.selector}
            onchange={(e) => setHairColor(e.currentTarget.value)}
          />
        </Match>
        <Match when={props.colorPicker === 'skin color'} keyed>
          <input
            type='color'
            value={getSkinColor()}
            class={styles.selector}
            onchange={(e) => setSkinColor(e.currentTarget.value)}
          />
        </Match>
        <Match when={props.colorPicker === 'brow color'} keyed>
          <input
            type='color'
            value={getBrowColor()}
            class={styles.selector}
            onchange={(e) => setBrowColor(e.currentTarget.value)}
          />
        </Match>
        <Match when={props.colorPicker === 'eye color'} keyed>
          <input
            type='color'
            value={getEyeColor()}
            class={styles.selector}
            onchange={(e) => setEyeColor(e.currentTarget.value)}
          />
        </Match>
        <Match when={props.colorPicker === 'frame color'} keyed>
          <input
            type='color'
            value={getFrameColor()}
            class={styles.selector}
            onchange={(e) => setFrameColor(e.currentTarget.value)}
          />
        </Match>
        <Match when={props.colorPicker === 'glass color'} keyed>
          <input
            type='color'
            value={getGlassColor()}
            class={styles.selector}
            onchange={(e) => setGlassColor(e.currentTarget.value) + '77'}
          />
        </Match>
        <Match when={props.colorPicker === 'lip color'} keyed>
          <input
            type='color'
            value={getLipColor()}
            class={styles.selector}
            onchange={(e) => setLipColor(e.currentTarget.value)}
          />
        </Match>
        <Match when={props.colorPicker === 'facial hair color'} keyed>
          <input
            type='color'
            value={getFacialHairColor()}
            class={styles.selector}
            onchange={(e) => setFacialHairColor(e.currentTarget.value)}
          />
        </Match>
        <Match when={props.colorPicker === 'primary outfit color'} keyed>
          <input
            type='color'
            value={getMainOutfitColor()}
            class={styles.selector}
            onchange={(e) => setMainOutfitColor(e.currentTarget.value)}
          />
        </Match>
        <Match when={props.colorPicker === 'secondary outfit color'} keyed>
          <input
            type='color'
            value={getSecondaryOutfitColor()}
            class={styles.selector}
            onchange={(e) => setSecondaryOutfitColor(e.currentTarget.value)}
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
