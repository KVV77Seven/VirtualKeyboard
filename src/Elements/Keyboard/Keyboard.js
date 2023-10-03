import { keys, specials } from './keys';
import Btn from './../Btn/Btn';
import "./Keyboard.scss";
import {ArrowsBlock} from "./ArrowsBlock/ArrowsBlock";

const btnActiveClass = "Btn_active";
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
let layout = layouts.EN
let layoutOrder = 0;
const layoutsOrder = [layouts.EN, layouts.RU];


export default function Keyboard(textarea) {
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';

    const main = document.createElement('div');
    const btns = [];
    const rowContainers = [];
    const switchableBtns = [];
    const numpad = document.createElement('div');

    main.className = "keyboard__main";

    keyboard.appendChild(main);
    keyboard.appendChild(numpad);

    const specialKeysDown = {
        ALT: false,
        SHIFT: false,
        CAPS: false,
    }

    createBtns();
    rowContainers[4].appendChild(ArrowsBlock(textarea));

    function createBtns() {

        keys.forEach((row) => {
            const rowContainer = document.createElement('div');
            rowContainer.className = "row-container";
            rowContainers.push(rowContainer);
            main.appendChild(rowContainer);
            row.forEach((key) => {
                const btn = Btn(key)
                rowContainer.appendChild(btn);
                btns.push(btn)
                if(!!key.char){
                    btn.subscribeOnKeyDown(() => {
                        if ((specialKeysDown.SHIFT && !specialKeysDown.CAPS) || (specialKeysDown.CAPS && !specialKeysDown.SHIFT) ) {
                            textarea.addChar(btn.charShift);
                        } else {
                            textarea.addChar(btn.char);
                        }
                    });
                }
                if (btn?.switchLayout) {
                    switchableBtns.push(btn);
                }
                if (!key?.special) {
                    return;
                }
                switch(key.special) {
                    case specials.BACKSPACE: {
                        btn.subscribeOnKeyDown(() => {
                            textarea.removeChar();
                        });
                        break;
                    }
                    case specials.ALT: {
                        btn.subscribeOnKeyDown(() => {
                            specialKeysDown.ALT = true;
                            if (specialKeysDown.SHIFT) {
                                switchLayout();
                            }
                        });
                        btn.subscribeOnKeyUp(() => {
                            specialKeysDown.ALT = false;
                        });
                        break;
                    }
                    case specials.SHIFT: {
                        btn.subscribeOnKeyDown(() => {
                            specialKeysDown.SHIFT = true;
                            if (specialKeysDown.ALT) {
                                switchLayout();
                            }
                        });
                        btn.subscribeOnKeyUp(() => {
                            specialKeysDown.SHIFT = false;
                        });
                        break;
                    }
                    case specials.CAPS: {
                        btn.subscribeOnKeyDown(() => {
                            specialKeysDown.CAPS = !specialKeysDown.CAPS;
                            if (specialKeysDown.CAPS) {
                                btn.classList.add(btnActiveClass);
                            } else {
                                btn.classList.remove(btnActiveClass);
                            }
                        });
                        break;
                    }

                    default: {
                        break;
                    }
                }
            })
        })
        
    }
    function switchLayout() {
        layoutOrder = layoutOrder + 1 > layoutsOrder.length-1 ? 0 : layoutOrder + 1;
        layout = layoutsOrder[layoutOrder];
        switchableBtns.forEach((btn) => {
            btn.switchLayout(layout);
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