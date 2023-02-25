import {createSignal} from "solid-js";

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

export const layers = [
  'backHair',
  'neck',
  'outfit',
  'hair',
  'face',
  'brows',
  'eyes',
  'glasses',
  'nose',
  'mouth',
  'frontHair',
  'facialHair',
];

export const [getSelectedLayer, setSelectedLayer] = createSignal('hair');