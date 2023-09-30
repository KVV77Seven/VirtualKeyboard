import { classNames } from '../../utils/classNames';
import './Btn.scss';
import { subscribeOnSwitchLayout, getLayout, layouts } from '../Keyboard/Keyboard';
const oneCharBtnClass = "one-char";
const twoCharBtnClass = "two-chars";

export default function Btn(
    key,
    className,
) {
    const char = key?.char;
    const width = key?.width;
    const btn = document.createElement('div');
    btn.className = classNames('Btn', className);

    if(char) {
        let isHaveShift = false;

        const charP = document.createElement('p');
        const charPShift = document.createElement('p');
    
        charP.className = "Btn__text";
        charPShift.className = "Btn__text";
    
        btn.appendChild(charP);
        btn.appendChild(charPShift);
        
        switchLayout(getLayout());
        subscribeOnSwitchLayout(switchLayout);

        if (isHaveShift) {
            btn.classList.add(twoCharBtnClass);
            btn.classList.remove(oneCharBtnClass);
        } else {
            btn.classList.add(oneCharBtnClass);
            btn.classList.remove(twoCharBtnClass);
        }

        btn.switchLayout = switchLayout;
        function switchLayout(layout) {

            switch(layout) {
                case layouts.EN: {
                    isHaveShift = char.en?.shift ? true : false;
                    setEnChars();
                    break;
                }
                case layouts.RU: {
                    isHaveShift = char.ru?.shift ? true : false;
                    setRuChars();
                    break;
                }
            }
        }
        function setEnChars() {
            charP.innerHTML = char.en.normal;
            if (isHaveShift) {
                charPShift.innerHTML = char.en.shift;
            }
        }
        function setRuChars() {
            charP.innerHTML = char.ru.normal;
            if (isHaveShift) {
                charPShift.innerHTML = char.en.shift;
            }
            
        }
    }
    if (width) {
        btn.style.width = width + "px";
    }
    document.addEventListener('keydown', (event) => {
        if (event.code == key.eventCode) {
            callKeyDown();
        }
      });

    btn.subscribeOnClick = (func) => {
        keyDownFuncs.push(func);
    }
    function callKeyDown() {
        keyDownFuncs.forEach((func) => {
            func();
        })
    }
    const keyDownFuncs = [];
    return btn;
}

