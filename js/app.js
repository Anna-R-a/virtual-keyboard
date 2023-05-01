// import { createObject, codeKeys, keys } from './create';

function createObject(tag, className) {
  const element = document.createElement(tag);
  element.classList.add(className);
  return element;
}
const codeKeys = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

const keys = ['Escape', '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift',
  'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const text = createObject('textarea', 'text');
text.setAttribute('id', 'text');
document.body.appendChild(text);

const keyboard = createObject('div', 'keyboard');
keyboard.setAttribute('id', 'keyboard');
document.body.appendChild(keyboard);

function init() {
  let symbol = '';
  for (let i = 0; i < keys.length; i += 1) {
    if (keys[i] === 'Backspace' || keys[i] === 'Delete'
      || keys[i] === 'Enter' || keys[i] === 'Shift') {
      symbol += '<div class="clear"></div>';
    }
    symbol += `<div class="keyboard__key" data = ${keys[i]}> ${keys[i]} </div>`;
    document.querySelector('#keyboard').innerHTML = symbol;
  }
}

function createKeyboard() {
  // const keyboard = createObject('div', 'keyboard');
  // document.body.appendChild(keyboard);
  init();
  // keyboard.appendChild(keyBtn);
  codeKeys.forEach((key) => {
    // const keyBtn = createObject('button', 'keyboard__key');
    // keyBtn.setAttribute = ('type', 'button');
    // const newLine = ['Backspace', 'Delete', 'Enter', 'ShiftRight'].indexOf(key) !== -1;
    if (key === 'Backspace' || key === 'Tab' || key === 'CapsLock'
    || key === 'Enter' || key === 'ShiftLeft' || key === 'ShiftRight') {
      document.querySelector('.keyboard .keyboard__key').classList.add('keyboard__key_long');
    }
    if (key === 'Space') {
      document.querySelector('.keyboard .keyboard__key').classList.add('keyboard__key_space');
    }
  });
}

createKeyboard();

// function init() {
//   let symbol = '';
//   for (let i = 0; i < keys.length; i += 1) {
//     if (keys[i] === 'Backspace' || keys[i] === 'Delete'
//       || keys[i] === 'Enter' || keys[i] === 'Shift') {
//       symbol += '<div class="clear"></div>';
//     }
//     symbol += `<div class="keyboard__key" data = ${keys[i]}> ${keys[i]} </div>`;
//   }
//   document.querySelector('#keyboard').innerHTML = symbol;
// }
// init();
// }
