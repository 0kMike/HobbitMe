import { createSignal } from 'solid-js';

export const userLayers = [
  'hair',
  'face',
  'brows',
  'eyes',
  'glasses',
  'nose',
  'mouth',
  'facial hair',
  'outfit',
];

export type UserLayer = (typeof userLayers)[number];

export const layerFiles: Record<string, string[]> = {
  '01Backhair': [
    'Backhair01.svg',
    'Backhair02.svg',
    'Backhair04.svg',
    'Backhair05.svg',
    'Backhair06.svg',
    'Backhair07.svg',
  ],
  '02Neck': ['Neck01.svg'],
  '03Outfit': [
    'Outfit01.svg',
    'Outfit02.svg',
    'Outfit03.svg',
    'Outfit04.svg',
    'Outfit04_big.svg',
  ],
  '04Hair': ['Hair03.svg', 'Hair06.svg'],
  '05Face': ['Face01.svg', 'Face02.svg', 'Face03.svg'],
  '06Brows': ['Brows01.svg', 'Brows02.svg', 'Brows03.svg', 'Brows04.svg'],
  '07Eyes': [
    'Eyes01.svg',
    'Eyes02.svg',
    'Eyes03.svg',
    'Eyes04.svg',
    'Eyes05.svg',
    'Eyes06.svg',
  ],
  '08Glasses': ['Glasses01.svg', 'Glasses02.svg'],
  '09Nose': [
    'Nose01.svg',
    'Nose02.svg',
    'Nose03.svg',
    'Nose04.svg',
    'Nose05.svg',
    'Nose06.svg',
  ],
  '10Mouth': ['Mouth01.svg', 'Mouth02.svg', 'Mouth03.svg', 'Mouth04.svg'],
  '11Fronthair': [
    'Fronthair01.svg',
    'Fronthair02.svg',
    'Fronthair03.svg',
    'Fronthair04.svg',
    'Fronthair05.svg',
    'Fronthair06.svg',
    'Fronthair07.svg',
  ],
  '12Facialhair': ['Facialhair04.svg', 'Facialhair06.svg'],
};

export const [getSelectedUserLayer, setSelectedUserLayer] =
  createSignal<UserLayer>('hair');

export function getFilesNamesByLayer(): string[] {
  switch (getSelectedUserLayer()) {
    case 'hair':
      return layerFiles['01Backhair'];
    case 'face':
      return layerFiles['05Face'];
    case 'brows':
      return layerFiles['06Brows'];
    case 'eyes':
      return layerFiles['07Eyes'];
    case 'glasses':
      return layerFiles['08Glasses'];
    case 'nose':
      return layerFiles['09Nose'];
    case 'mouth':
      return layerFiles['10Mouth'];
    case 'facial hair':
      return layerFiles['12Facialhair'];
    case 'outfit':
      return layerFiles['03Outfit'];
    default:
      return [];
  }
}

export function mapUserLayer(userLayer: UserLayer) {
  switch (userLayer) {
    case 'hair':
      return '01Backhair';
    case 'face':
      return '05Face';
    case 'brows':
      return '06Brows';
    case 'eyes':
      return '07Eyes';
    case 'glasses':
      return '08Glasses';
    case 'nose':
      return '09Nose';
    case 'mouth':
      return '10Mouth';
    case 'facial hair':
      return '12Facialhair';
    case 'outfit':
      return '03Outfit';
    default:
      return [];
  }
}
