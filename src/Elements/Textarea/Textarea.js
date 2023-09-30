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
        console.log(text);
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
    return textarea;
}