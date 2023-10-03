import "./Textarea.scss";

export function Textarea() {
    let currentIndex = 0;
    let text = "";
    const textarea = document.createElement('div');
    const textField = document.createElement("p");

    textarea.className = "textarea";
    textField.className = "text-field"
    textarea.appendChild(textField);

    textarea.addChar = (char) => {
        text = text.substring(0, currentIndex) + char + text.substring(currentIndex);
        textField.textContent = text;
        currentIndex++;
    }
    textarea.removeChar = () => {
        if (currentIndex > 0) {
            text = text.substring(0, currentIndex-1) + text.substring(currentIndex);
            textField.textContent = text;
            currentIndex--;
        }
    }
    textarea.cursorMoveRight = () => {
        currentIndex < text.length ? currentIndex++ : "";
    }
    textarea.cursorMoveLeft = () => {
        currentIndex > 0 ? currentIndex-- : "";
    }
    return textarea;
}