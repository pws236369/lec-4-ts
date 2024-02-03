import './style.css';
import { setupCounter } from './counter.ts';
import { balagan } from './balagan.ts';

balagan();
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
