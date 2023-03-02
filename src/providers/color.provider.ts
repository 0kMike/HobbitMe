import { createSignal } from 'solid-js';
import { UserLayer } from './layer.provider';

export const [getHairColor, setHairColor] = createSignal(
  'rgba(0, 127, 255, 1)'
);
export const [getSkinColor, setSkinColor] = createSignal(
  'rgba(0, 127, 255, 1)'
);
export const [getBrowColor, setBrowColor] = createSignal(
  'rgba(0, 127, 255, 1)'
);
export const [getEyeColor, setEyeColor] = createSignal('rgba(0, 127, 255, 1)');
export const [getFrameColor, setFrameColor] = createSignal(
  'rgba(0, 127, 255, 1)'
);
export const [getGlassColor, setGlassColor] = createSignal(
  'rgba(0, 127, 255, 1)'
);
export const [getLipColor, setLipColor] = createSignal('rgba(0, 127, 255, 1)');
export const [getMainOutfitColor, setMainOutfitColor] = createSignal(
  'rgba(0, 127, 255, 1)'
);
export const [getSecondaryOutfitColor, setSecondaryOutfitColor] = createSignal(
  'rgba(0, 127, 255, 1)'
);
export const [getTertiaryOutfitColor, setTertiaryOutfitColor] = createSignal(
  'rgba(0, 127, 255, 1)'
);

export function getColorPickersByLayer(layer: UserLayer) {
  switch (layer) {
    case 'hair':
      return ['hair color'];
    case 'face':
      return ['skin color'];
    case 'brows':
      return ['brow color'];
    case 'eyes':
      return ['eye color'];
    case 'glasses':
      return ['frame color', 'glass color'];
    case 'nose':
      return [];
    case 'mouth':
      return ['lip color'];
    case 'facial hair':
      return ['facial hair color'];
    case 'outfit':
      return [
        'primary outfit color',
        'secondary outfit color',
        'tertiary outfit color',
      ];
    default:
      return [];
  }
}
