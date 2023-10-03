
import "./ArrowsBlock.scss";
import Btn from "../../Btn/Btn";
import {arrows} from "../keys";
export function ArrowsBlock(textarea) {
    const block = document.createElement("div");
    block.className = "ArrowsBlock";

    const subblock = document.createElement('div');

    subblock.className = "ArrowsBlock__subblock";
    const btns = {
        left:Btn(arrows.left),
        right:Btn(arrows.right),
        up:Btn(arrows.up, ["height-sm-btn"]),
        down:Btn(arrows.down, ["height-sm-btn"]),
    };


    subblock.appendChild(btns.up);
    subblock.appendChild(btns.down);

    block.appendChild(btns.left);
    block.appendChild(subblock);
    block.appendChild(btns.right);

    btns.left.subscribeOnKeyDown(() => {
        textarea.cursorMoveLeft();
    });
    btns.right.subscribeOnKeyDown(() => {
        textarea.cursorMoveRight();
    })
    return block;
}