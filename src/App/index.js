import "./index.scss";
import Keyboard from "../Elements/Keyboard/Keyboard";
import { Textarea } from "../Elements/Textarea/Textarea";
const root = document.getElementById('root');
root.className = "main-container";
const textarea = Textarea()
root.appendChild(textarea)
root.appendChild(Keyboard(textarea));