import { createSignal } from 'solid-js';
import { layerFiles } from './layer.provider';

export function setItem(item: string) {
  const layer = Object.keys(layerFiles).find((layer: string) =>
    layerFiles[layer].includes(item)
  );
  switch (layer) {
    case '01Backhair':
      setSelectedBackHair(item);
      return;
    case '02Neck':
      return;
    case '04Hair':
      setSelectedHair(item);
      return;
    case '05Face':
      setSelectedFace(item);
      return;
    case '06Brows':
      setSelectedBrows(item);
      return;
    case '07Eyes':
      setSelectedEyes(item);
      return;
    case '08Glasses':
      setSelectedGlasses(item);
      return;
    case '09Nose':
      setSelectedNose(item);
      return;
    case '10Mouth':
      setSelectedMouth(item);
      return;
    case '12Facialhair':
      setSelectedFacialHair(item);
      return;
  }
}

export const [getSelectedHair, setSelectedHair] = createSignal<string>();
export const [getSelectedFrontHair, setSelectedFrontHair] =
  createSignal<string>();
export const [getSelectedBackHair, setSelectedBackHair] =
  createSignal<string>();
export const [getSelectedFace, setSelectedFace] = createSignal<string>('Face01.svg');
export const [getSelectedBrows, setSelectedBrows] = createSignal<string>();
export const [getSelectedEyes, setSelectedEyes] = createSignal<string>();
export const [getSelectedGlasses, setSelectedGlasses] = createSignal<string>();
export const [getSelectedNose, setSelectedNose] = createSignal<string>();
export const [getSelectedMouth, setSelectedMouth] = createSignal<string>();
export const [getSelectedFacialHair, setSelectedFacialHair] =
  createSignal<string>();
