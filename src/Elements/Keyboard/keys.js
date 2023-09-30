import {icons} from "./keyIcons";
export const specials = {
  TAB: "tab",
  CAPS: "caps",
  SHIFT: "shift",
  WIN: "win",
  CTRL: "ctrl",
  FN: "fn",
  ALT: "alt",
  SPACE: "space",
  BACKSPACE: "backspace",
  ENTER: "enter",
}
export const keys = [
    [
      { char: { en: { normal: "`", shift: "~" }, ru: { normal: "ё", shift: "Ё" } },
      width: 30, eventCode: "Backquote"},
      { char: { en: { normal: "1", shift: "!" }, ru: { normal: "1", shift: "!" } }, eventCode: "Digit1" },
      { char: { en: { normal: "2", shift: "@" }, ru: { normal: "2", shift: '"' } }, eventCode: "Digit2" },
      { char: { en: { normal: "3", shift: "#" }, ru: { normal: "3", shift: "№" } }, eventCode: "Digit3"  },
      { char: { en: { normal: "4", shift: "$" }, ru: { normal: "4", shift: ";" } }, eventCode: "Digit4"  },
      { char: { en: { normal: "5", shift: "%" }, ru: { normal: "5", shift: "%" } }, eventCode: "Digit5"  },
      { char: { en: { normal: "6", shift: "^" }, ru: { normal: "6", shift: ":" } }, eventCode: "Digit6"  },
      { char: { en: { normal: "7", shift: "&" }, ru: { normal: "7", shift: "?" } }, eventCode: "Digit7"  },
      { char: { en: { normal: "8", shift: "*" }, ru: { normal: "8", shift: "*" } }, eventCode: "Digit8"  },
      { char: { en: { normal: "9", shift: "(" }, ru: { normal: "9", shift: "(" } }, eventCode: "Digit9"  },
      { char: { en: { normal: "0", shift: ")" }, ru: { normal: "0", shift: ")" } }, eventCode: "Digit0"  },
      { char: { en: { normal: "-", shift: "_" }, ru: { normal: "-", shift: "_" } }, eventCode: "Minus"  },
      { char: { en: { normal: "=", shift: "+" }, ru: { normal: "=", shift: "+" } }, eventCode: "Equal"  },
      { special: specials.BACKSPACE, width: 90, eventCode: "Backspace" },
    ],
    [
      { special: specials.TAB, width: 60, eventCode: "Tab" },
      { char: { en: { normal: "q" }, ru: { normal: "й" } }, eventCode: "KeyQ" },
      { char: { en: { normal: "w" }, ru: { normal: "ц" } }, eventCode: "KeyW"  },
      { char: { en: { normal: "e" }, ru: { normal: "у" } }, eventCode: "KeyE"  },
      { char: { en: { normal: "r" }, ru: { normal: "к" } }, eventCode: "KeyR"  },
      { char: { en: { normal: "t" }, ru: { normal: "е" } }, eventCode: "KeyT"  },
      { char: { en: { normal: "y" }, ru: { normal: "н" } }, eventCode: "KeyY"  },
      { char: { en: { normal: "u" }, ru: { normal: "г" } }, eventCode: "KeyU"  },
      { char: { en: { normal: "i" }, ru: { normal: "ш" } }, eventCode: "KeyI"  },
      { char: { en: { normal: "o" }, ru: { normal: "щ" } }, eventCode: "KeyO"  },
      { char: { en: { normal: "p" }, ru: { normal: "з" } }, eventCode: "KeyP"  },
      { char: { en: { normal: "[", shift: "{" }, ru: { normal: "х", shift: "Х" } }, eventCode: "BracketLeft"  },
      { char: { en: { normal: "]", shift: "}" }, ru: { normal: "ъ", shift: "Ъ" } }, eventCode: "BracketRight"  },
      { char: { en: { normal: "\\", shift: "|" }, ru: { normal: "\\", shift: "/" } }, width: 60, eventCode: "Backslash"  },
    ],
    [
    { special: specials.CAPS, width: 74, eventCode: "CapsLock" },
    { char: { en: { normal: "a" }, ru: { normal: "ф" } }, eventCode: "KeyA" },
    { char: { en: { normal: "s" }, ru: { normal: "ы" } }, eventCode: "KeyS" },
    { char: { en: { normal: "d" }, ru: { normal: "в" } }, eventCode: "KeyD" },
    { char: { en: { normal: "f" }, ru: { normal: "а" } }, eventCode: "KeyF" },
    { char: { en: { normal: "g" }, ru: { normal: "п" } }, eventCode: "KeyG" },
    { char: { en: { normal: "h" }, ru: { normal: "р" } }, eventCode: "KeyH" },
    { char: { en: { normal: "j" }, ru: { normal: "о" } }, eventCode: "KeyJ" },
    { char: { en: { normal: "k" }, ru: { normal: "л" } }, eventCode: "KeyK" },
    { char: { en: { normal: "l" }, ru: { normal: "д" } }, eventCode: "KeyL" },
    { char: { en: { normal: ";", shift: ":" }, ru: { normal: "ж", shift: "Ж" } }, eventCode: "Semicolon" },
    { char: { en: { normal: "'", shift: '"' }, ru: { normal: "э", shift: "Э" } }, eventCode: "Quote" },
    { special: specials.ENTER,  width: 90, eventCode: "Enter"},
  ],
  [ 
    { special: specials.SHIFT,  width: 100, eventCode: "ShiftLeft"},
    { char: { en: { normal: "z" }, ru: { normal: "я" } }, eventCode: "KeyZ" },
    { char: { en: { normal: "x" }, ru: { normal: "ч" } }, eventCode: "KeyX" },
    { char: { en: { normal: "c" }, ru: { normal: "с" } }, eventCode: "KeyC" },
    { char: { en: { normal: "v" }, ru: { normal: "м" } }, eventCode: "KeyV" },
    { char: { en: { normal: "b" }, ru: { normal: "и" } }, eventCode: "KeyB" },
    { char: { en: { normal: "n" }, ru: { normal: "т" } }, eventCode: "KeyN" },
    { char: { en: { normal: "m" }, ru: { normal: "ь" } }, eventCode: "KeyM" },
    { char: { en: { normal: ",", shift: "<" }, ru: { normal: "б", shift: "Б" } }, eventCode: "Comma" },
    { char: { en: { normal: ".", shift: ">" }, ru: { normal: "ю", shift: "Ю" } }, eventCode: "Period" },
    { char: { en: { normal: "/", shift: "?" }, ru: { normal: ".", shift: "," } }, eventCode: "Slash" },
    { special: specials.SHIFT,  width: 108, eventCode: "ShiftRight" },
  ],
  [ 
    { special: specials.CTRL, width: 80, text: "ctrl", eventCode: "ControlLeft" },
    { special:  specials.ALT, width: 60, text: "alt", eventCode: "AltLeft"},
    { char: { en: { normal: " "}, ru: { normal: " " } }, width: 260 , eventCode: "Space"},
    { special: specials.ALT, width: 60, text: "alt", eventCode: "AltRight"},
    { special: specials.CTRL, width: 64, text: "ctrl", eventCode: "ControlRight"}, 
  ],
  ];