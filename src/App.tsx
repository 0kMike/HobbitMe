import { JSX } from 'solid-js';
import './App.scss';
import Preview from "./components/Preview/Preview";
import Selection from "./components/Selection/Selection";

export default function App(): JSX.Element {
  return (
    <main>
      <Selection/>
      <Preview/>
    </main>
  );
}