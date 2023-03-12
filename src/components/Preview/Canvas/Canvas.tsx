import { JSX, onMount } from 'solid-js';
import styles from './Canvas.module.scss';
import { getSelectedFace } from '../../../providers/selection.provider';

export default function Canvas(): JSX.Element {
  let canvasRef!: HTMLCanvasElement;
  let context: CanvasRenderingContext2D | null;

  const loadImages = () => {
    let faceImg = new window.Image();
    faceImg.addEventListener('load', () => {
      context = canvasRef.getContext('2d');
      canvasRef.width = faceImg.width;
      canvasRef.height = faceImg.height;
      if (context) context.drawImage(faceImg, 0, 0);
    });
    faceImg.src = `src/assets/avatarLayers/05Face/${getSelectedFace()}`;
    console.log('faceImg loaded!')
  };

  onMount(() => loadImages());

  return <canvas class={styles.canvas} ref={canvasRef}></canvas>;
}
