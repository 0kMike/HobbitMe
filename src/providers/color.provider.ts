import { createSignal } from 'solid-js';

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
