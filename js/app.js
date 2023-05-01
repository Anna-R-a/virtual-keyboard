// import { createObject, codeKeys, keys } from "./create";

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

const keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593;', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#8592;', '&#8595;', '&#8594;', 'Ctrl'];

const text = createObject('textarea', 'text');
text.setAttribute('id', 'text');
document.body.appendChild(text);

function createKeyboard() {
  const keyboard = createObject('div', 'keyboard');
  document.body.appendChild(keyboard);
  // keyboard.appendChild(keyBtn);
  codeKeys.forEach((key) => {
    // for (let i = 0; i < keys.length; i += 1) {
    const keyBtn = createObject('button', 'keyboard__key');
    // keyBtn.setAttribute = ('type', 'button');
    keyBtn.setAttribute = ('data', `${codeKeys[codeKeys.indexOf(key)]}`);
    if (key === 'Space') {
      keyBtn.classList.add('keyboard__key_space');
      keyBtn.innerHTML = '';
    }
    if (key === 'Backspace') {
      keyBtn.classList.add('keyboard__key_long');
      keyBtn.innerHTML = 'Backspace';
    }
    if (key === 'Tab') {
      // keyBtn.classList.add('keyboard__key_long');
      keyBtn.innerHTML = 'Tab';
    }
    if (key === 'CapsLock') {
      keyBtn.classList.add('keyboard__key_long');
      keyBtn.innerHTML = 'CapsLock';
    }
    if (key === 'Enter') {
      keyBtn.classList.add('keyboard__key_long');
      keyBtn.innerHTML = 'Enter';
    }
    if (key === 'ShiftLeft' || key === 'ShiftRight') {
      keyBtn.classList.add('keyboard__key_long');
      keyBtn.innerHTML = 'Shift';
    }
    keyBtn.innerHTML = `${keys[codeKeys.indexOf(key)]}`;
    keyboard.appendChild(keyBtn);
  });
}
window.addEventListener('DOMContentLoaded', () => {
  createKeyboard();
});
