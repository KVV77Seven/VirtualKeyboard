import "./SpecialBtn.scss";

export function MakeBtnSpecial(btn, key) {
    btn.classList.add("Btn_special");
    if (key?.text) {
        const text = document.createElement('p');
        text.innerHTML = key.text;
        btn.appendChild(text);
        text.className = "Btn_special__text";
    }
    if (key?.img) {
        const img = document.createElement('img');
        img.src = key.img;
        img.className = "Btn_special__img";
        btn.appendChild(img);
    }
}