import { keys, specials } from './keys';
import Btn from './../Btn/Btn';
import "./Keyboard.scss";


const onSwitchLayout = {
    funcs: [],
    addFunc: (func) => {
        onSwitchLayout.funcs.push(func);
    },
    call: (currentLayout) => {
        layout = currentLayout;
        if (onSwitchLayout.funcs) {
            return;
        }
        onSwitchLayout.funcs.forEach(func => {
            func(currentLayout);
        });
    }
}
export const layouts = {
    EN: "en",
    RU: "ru"
}
let layout = layouts.EN;

export default function Keyboard(textarea) {
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';

    const main = document.createElement('div');
    const mainRowContainers = [];
    const numpad = document.createElement('div');

    main.className = "keyboard__main";

    keyboard.appendChild(main);
    keyboard.appendChild(numpad);

    const specialKeysDown = {

    }

    createBtns();

    function createBtns() {

        keys.forEach((row) => {
            const rowContainer = document.createElement('div');
            mainRowContainers.push(rowContainer)
            rowContainer.className = "row-container";
            main.appendChild(rowContainer);
            row.forEach((key) => {
                const btn = Btn(key)
                rowContainer.appendChild(btn);
                if(!!key.char){
                    btn.subscribeOnClick(() => {
                        textarea.addChar(key.char.en.normal);
                    });
                }
                if (btn?.switchLayout) {
                    btn.switchLayout(layouts.RU);
                }
                switch(key.special) {
                    case specials.BACKSPACE: {
                        btn.subscribeOnClick(() => {
                            textarea.removeChar();
                        });
                        break;
                    }
                    case specials.ALT: {
                        break;
                    }
                    case specials.SHIFT: {
                        break;
                    }
                    default: {
                        break;
                    }
                }
            })
        })
        
    }
    return keyboard;
}
export function getLayout() {
    return layout
}
export function subscribeOnSwitchLayout(func) {
    onSwitchLayout.addFunc(func);
}