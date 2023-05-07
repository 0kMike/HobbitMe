import { JSX } from 'solid-js';
import styles from './ItemCanvas.module.scss';

export interface ItemCamvasProps {
  itemLayer: string;
  itemFileName: string;
}

export default function ItemSVG(props: ItemCamvasProps): JSX.Element {
  const svgElement = import(
    `src/assets/avatarLayers/${props.itemLayer}/${props.itemFileName}`
  );
  return <>{JSON.stringify(svgElement)}</>;
}
