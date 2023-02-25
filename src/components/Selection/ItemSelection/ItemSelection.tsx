import {JSX} from "solid-js";
import styles from "./ItemSelection.module.scss"
import {getSelectedLayer} from "../../../providers/layer.provider";

export default function ItemSelection(): JSX.Element {
  return <section class={styles.wrapper}>{getSelectedLayer()}</section>
}