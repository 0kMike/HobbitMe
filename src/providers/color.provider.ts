import { createSignal } from 'solid-js';
import { UserLayer } from './layer.provider';

export const [setEyeColor, getEyeColor] = createSignal('rgba(0, 127, 255, 1)');
export const [setHairColor, getHairColor] = createSignal(
  'rgba(0, 127, 255, 1)'
);
export const [setSkinColor, getSkinColor] = createSignal(
  'rgba(0, 127, 255, 1)'
);
export const [setMainOutfitColor, getMainOutfitColor] = createSignal(
  'rgba(0, 127, 255, 1)'
);
export const [setSecondaryOutfitColor, getSecondaryOutfitColor] = createSignal(
  'rgba(0, 127, 255, 1)'
);
export const [setTertiaryOutfitColor, getTertiaryOutfitColor] = createSignal(
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
