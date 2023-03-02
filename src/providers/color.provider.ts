import { createSignal } from 'solid-js';
import { UserLayer } from './layer.provider';

export const [getHairColor, setHairColor] = createSignal('#602500');
export const [getSkinColor, setSkinColor] = createSignal('#ffebeb');
export const [getBrowColor, setBrowColor] = createSignal('#602500');
export const [getEyeColor, setEyeColor] = createSignal('#00aaff');
export const [getFrameColor, setFrameColor] = createSignal('#000000');
export const [getGlassColor, setGlassColor] = createSignal('#00aaff77');
export const [getLipColor, setLipColor] = createSignal('#ff7777');
export const [getFacialHairColor, setFacialHairColor] = createSignal('#602500');
export const [getMainOutfitColor, setMainOutfitColor] = createSignal('#ffffff');
export const [getSecondaryOutfitColor, setSecondaryOutfitColor] =
  createSignal('#602500');
export const [getTertiaryOutfitColor, setTertiaryOutfitColor] =
  createSignal('#0f3e0f');

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
