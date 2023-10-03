import './Btn.scss';
import { subscribeOnSwitchLayout, getLayout, layouts } from '../Keyboard/Keyboard';
import {MakeBtnCommon} from "./Common/MakeBtnCommon";
import {MakeBtnSpecial} from "./Special/MakeBtnSpecial";
import {classNames} from "../../utils/classNames";

const btnPressedClass = "Btn_pressed";
const btnPressedAnimTime = 150;

export default function Btn(
    key,
    className,
) {
    const btn = document.createElement('div');
    btn.className = classNames("Btn", className);
    if (key?.char) {
        MakeBtnCommon(btn, key, btnPressedClass, btnPressedAnimTime);
    } else if(key?.special) {
        MakeBtnSpecial(btn, key);
    }
    if (key?.width) {
        btn.style.width = key.width + "px";
    }

    let isKeyDown = false;
    document.addEventListener('keydown', (event) => {
        if (event.code === key.eventCode) {
            callKeyDown();
            if (!isKeyDown) {
                btn.classList.add(btnPressedClass);
            }
            isKeyDown = true;
        }
    });
    btn.subscribeOnKeyDown = (func) => {
        keyDownFuncs.push(func);
    }
    function callKeyDown() {
        keyDownFuncs.forEach((func) => {
            func();
        })
    }
    const keyDownFuncs = [];


    document.addEventListener('keyup', (event) => {
        if (event.code === key.eventCode && event.code) {
            btn.classList.remove(btnPressedClass);
            callKeyUp();
            isKeyDown = false;
        }
    });
    btn.subscribeOnKeyUp = (func) => {
        keyUpFuncs.push(func);
    }
    function callKeyUp() {
        keyUpFuncs.forEach((func) => {
            func();
        })
    }
    const keyUpFuncs = [];


    let isMouseDown = false;
    btn.addEventListener('mousedown', () => {
        if (!isMouseDown) {
            btn.classList.add(btnPressedClass);
        }
        callKeyDown()
        if (isMouseDown) {
            return;
        }
        isMouseDown = true;
        setTimeout(() => {
            if (!isMouseDown) {
                return;
            }
            whileMouseDown();
        }, 500)


        function whileMouseDown() {
            if (!isMouseDown) {
                return
            }
            setTimeout(() => {
                callKeyDown();
                whileMouseDown();
            }, 30);
        }
    });

    btn.addEventListener('mouseup', () => {
        isMouseDown = false
        btn.classList.remove(btnPressedClass);
        callKeyUp();
    })
    return btn;
}

