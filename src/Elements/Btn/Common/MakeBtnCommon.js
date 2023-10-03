import "./CommonBtn.scss";
import {getLayout, layouts, subscribeOnSwitchLayout} from "../../Keyboard/Keyboard";


const oneCharBtnClass = "one-char";
const twoCharBtnClass = "two-chars";

export function MakeBtnCommon(btn, key, btnPressedClass, btnPressedAnimTime) {
    const char = key.char;
    btn.classList.add("Btn_common");
    let isHaveShift = false;

    const charP = document.createElement('p');
    const charPShift = document.createElement('p');

    charP.classList.add("Btn__char");
    charPShift.classList.add("Btn__char");

    btn.appendChild(charP);
    btn.appendChild(charPShift);

    switchLayout(getLayout());
    subscribeOnSwitchLayout(switchLayout);

    btn.switchLayout = switchLayout;
    function switchLayout(layout) {

        switch(layout) {
            case layouts.EN: {
                isHaveShift = !!char.en?.shift;
                setEnChars();
                break;
            }
            case layouts.RU: {
                isHaveShift = !!char.ru?.shift;
                setRuChars();
                break;
            }
        }
        if (isHaveShift) {
            btn.classList.add(twoCharBtnClass);
            btn.classList.remove(oneCharBtnClass);
        } else {
            btn.classList.add(oneCharBtnClass);
            btn.classList.remove(twoCharBtnClass);
        }
        btn.classList.add(btnPressedClass);
        setTimeout(() => {btn.classList.remove(btnPressedClass)}, btnPressedAnimTime);
    }
    function setEnChars() {
        charP.innerHTML = char.en.normal;
        btn.char = char.en.normal;
        if (isHaveShift) {
            charPShift.innerHTML = char.en.shift;
            btn.charShift = char.en.shift;
        } else {
            btn.charShift = char.en.normal.toUpperCase();
        }
    }
    function setRuChars() {
        charP.innerHTML = char.ru.normal;
        btn.char = char.ru.normal;
        if (isHaveShift) {
            charPShift.innerHTML = char.ru.shift;
            btn.charShift = char.ru.shift;
        } else {
            btn.charShift = char.ru.normal.toUpperCase();
        }

    }
}