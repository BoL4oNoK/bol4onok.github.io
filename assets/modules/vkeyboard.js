import VKButtons from './vk_buttons.js';

export default class VKeyboard {
  constructor() {
    this.buttons = [
      new VKButtons(1, 'Backquote', { locale: { en: ['`', '~'], ru: ['ё', 'Ё'] }, special: false, capsed: false }),
      new VKButtons(1, 'Digit1', { locale: { en: ['1', '!'], ru: ['1', '!'] }, special: false, capsed: false }),
      new VKButtons(1, 'Digit2', { locale: { en: ['2', '@'], ru: ['2', '"'] }, special: false, capsed: false }),
      new VKButtons(1, 'Digit3', { locale: { en: ['3', '#'], ru: ['3', '№'] }, special: false, capsed: false }),
      new VKButtons(1, 'Digit4', { locale: { en: ['4', '$'], ru: ['4', ';'] }, special: false, capsed: false }),
      new VKButtons(1, 'Digit5', { locale: { en: ['5', '%'], ru: ['5', '%'] }, special: false, capsed: false }),
      new VKButtons(1, 'Digit6', { locale: { en: ['6', '^'], ru: ['6', ':'] }, special: false, capsed: false }),
      new VKButtons(1, 'Digit7', { locale: { en: ['7', '&'], ru: ['7', '?'] }, special: false, capsed: false }),
      new VKButtons(1, 'Digit8', { locale: { en: ['8', '*'], ru: ['8', '*'] }, special: false, capsed: false }),
      new VKButtons(1, 'Digit9', { locale: { en: ['9', '('], ru: ['9', '('] }, special: false, capsed: false }),
      new VKButtons(1, 'Digit0', { locale: { en: ['0', ')'], ru: ['0', ')'] }, special: false, capsed: false }),
      new VKButtons(1, 'Minus', { locale: { en: ['-', '_'], ru: ['-', '_'] }, special: false, capsed: false }),
      new VKButtons(1, 'Equal', { locale: { en: ['=', '+'], ru: ['=', '+'] }, special: false, capsed: false }),
      new VKButtons(1, 'Backspace', { locale: { en: ['Backspace', 'Backspace'], ru: ['Backspace', 'Backspace'] }, special: { nonprintable: true }, capsed: false }),
      new VKButtons(2, 'Tab', { locale: { en: ['Tab', 'Tab'], ru: ['Tab', 'Tab'] }, special: { symbol: '\t' }, capsed: false }),
      new VKButtons(2, 'KeyQ', { locale: { en: ['q', 'Q'], ru: ['й', 'Й'] }, special: false, capsed: true }),
      new VKButtons(2, 'KeyW', { locale: { en: ['w', 'W'], ru: ['ц', 'Ц'] }, special: false, capsed: true }),
      new VKButtons(2, 'KeyE', { locale: { en: ['e', 'E'], ru: ['у', 'У'] }, special: false, capsed: true }),
      new VKButtons(2, 'KeyR', { locale: { en: ['r', 'R'], ru: ['к', 'К'] }, special: false, capsed: true }),
      new VKButtons(2, 'KeyT', { locale: { en: ['t', 'T'], ru: ['е', 'Е'] }, special: false, capsed: true }),
      new VKButtons(2, 'KeyY', { locale: { en: ['y', 'Y'], ru: ['н', 'Н'] }, special: false, capsed: true }),
      new VKButtons(2, 'KeyU', { locale: { en: ['u', 'U'], ru: ['г', 'Г'] }, special: false, capsed: true }),
      new VKButtons(2, 'KeyI', { locale: { en: ['i', 'I'], ru: ['ш', 'Ш'] }, special: false, capsed: true }),
      new VKButtons(2, 'KeyO', { locale: { en: ['o', 'O'], ru: ['щ', 'Щ'] }, special: false, capsed: true }),
      new VKButtons(2, 'KeyP', { locale: { en: ['p', 'P'], ru: ['з', 'З'] }, special: false, capsed: true }),
      new VKButtons(2, 'BracketLeft', { locale: { en: ['[', '{'], ru: ['х', 'Х'] }, special: false, capsed: true }),
      new VKButtons(2, 'BracketRight', { locale: { en: [']', '}'], ru: ['ъ', 'Ъ'] }, special: false, capsed: true }),
      new VKButtons(2, 'Backslash', { locale: { en: ['\\', '|'], ru: ['\\', '/'] }, special: false, capsed: false }),
      new VKButtons(2, 'Delete', { locale: { en: ['Del', 'Del'], ru: ['Del', 'Del'] }, special: { nonprintable: true }, capsed: false }),
      new VKButtons(3, 'CapsLock', { locale: { en: ['CapsLock', 'CapsLock'], ru: ['CapsLock', 'CapsLock'] }, special: { nonprintable: true }, capsed: false }),
      new VKButtons(3, 'KeyA', { locale: { en: ['a', 'A'], ru: ['ф', 'Ф'] }, special: false, capsed: true }),
      new VKButtons(3, 'KeyS', { locale: { en: ['s', 'S'], ru: ['ы', 'Ы'] }, special: false, capsed: true }),
      new VKButtons(3, 'KeyD', { locale: { en: ['d', 'D'], ru: ['в', 'В'] }, special: false, capsed: true }),
      new VKButtons(3, 'KeyF', { locale: { en: ['f', 'F'], ru: ['а', 'А'] }, special: false, capsed: true }),
      new VKButtons(3, 'KeyG', { locale: { en: ['g', 'G'], ru: ['п', 'П'] }, special: false, capsed: true }),
      new VKButtons(3, 'KeyH', { locale: { en: ['h', 'H'], ru: ['р', 'Р'] }, special: false, capsed: true }),
      new VKButtons(3, 'KeyJ', { locale: { en: ['j', 'J'], ru: ['о', 'О'] }, special: false, capsed: true }),
      new VKButtons(3, 'KeyK', { locale: { en: ['k', 'K'], ru: ['л', 'Л'] }, special: false, capsed: true }),
      new VKButtons(3, 'KeyL', { locale: { en: ['l', 'L'], ru: ['д', 'Д'] }, special: false, capsed: true }),
      new VKButtons(3, 'Semicolon', { locale: { en: [';', ':'], ru: ['ж', 'Ж'] }, special: false, capsed: true }),
      new VKButtons(3, 'Quote', { locale: { en: ['\'', '"'], ru: ['э', 'Э'] }, special: false, capsed: true }),
      new VKButtons(3, 'Enter', { locale: { en: ['Enter', 'Enter'], ru: ['Enter', 'Enter'] }, special: { symbol: '\n' }, capsed: false }),
      new VKButtons(4, 'ShiftLeft', { locale: { en: ['Shift', 'Shift'], ru: ['Shift', 'Shift'] }, special: { nonprintable: true }, capsed: false }),
      new VKButtons(4, 'KeyZ', { locale: { en: ['z', 'Z'], ru: ['я', 'Я'] }, special: false, capsed: true }),
      new VKButtons(4, 'KeyX', { locale: { en: ['x', 'X'], ru: ['ч', 'Ч'] }, special: false, capsed: true }),
      new VKButtons(4, 'KeyC', { locale: { en: ['c', 'C'], ru: ['с', 'С'] }, special: false, capsed: true }),
      new VKButtons(4, 'KeyV', { locale: { en: ['v', 'V'], ru: ['м', 'М'] }, special: false, capsed: true }),
      new VKButtons(4, 'KeyB', { locale: { en: ['b', 'B'], ru: ['и', 'И'] }, special: false, capsed: true }),
      new VKButtons(4, 'KeyN', { locale: { en: ['n', 'N'], ru: ['т', 'Т'] }, special: false, capsed: true }),
      new VKButtons(4, 'KeyM', { locale: { en: ['m', 'M'], ru: ['ь', 'Ь'] }, special: false, capsed: true }),
      new VKButtons(4, 'Comma', { locale: { en: [',', '<'], ru: ['б', 'Б'] }, special: false, capsed: true }),
      new VKButtons(4, 'Period', { locale: { en: ['.', '>'], ru: ['ю', 'Ю'] }, special: false, capsed: true }),
      new VKButtons(4, 'Slash', { locale: { en: ['/', '?'], ru: ['.', ','] }, special: false, capsed: false }),
      new VKButtons(4, 'ArrowUp', { locale: { en: ['▲', '▲'], ru: ['▲', '▲'] }, special: { nonprintable: true }, capsed: false }),
      new VKButtons(4, 'ShiftRight', { locale: { en: ['Shift', 'Shift'], ru: ['Shift', 'Shift'] }, special: { nonprintable: true }, capsed: false }),
      new VKButtons(5, 'ControlLeft', { locale: { en: ['Ctrl', 'Ctrl'], ru: ['Ctrl', 'Ctrl'] }, special: { nonprintable: true }, capsed: false }),
      new VKButtons(5, 'AltLeft', { locale: { en: ['Alt', 'Alt'], ru: ['Alt', 'Alt'] }, special: { nonprintable: true }, capsed: false }),
      new VKButtons(5, 'MetaLeft', { locale: { en: ['Win', 'Win'], ru: ['Win', 'Win'] }, special: { nonprintable: true }, capsed: false }),
      new VKButtons(5, 'Space', { locale: { en: ['', ''], ru: ['', ''] }, special: { symbol: ' ' }, capsed: false }),
      new VKButtons(5, 'AltRight', { locale: { en: ['Alt', 'Alt'], ru: ['Alt', 'Alt'] }, special: { nonprintable: true }, capsed: false }),
      new VKButtons(5, 'ControlRight', { locale: { en: ['Ctrl', 'Ctrl'], ru: ['Ctrl', 'Ctrl'] }, special: { nonprintable: true }, capsed: false }),
      new VKButtons(5, 'ArrowLeft', { locale: { en: ['◄', '◄'], ru: ['◄', '◄'] }, special: { nonprintable: true }, capsed: false }),
      new VKButtons(5, 'ArrowDown', { locale: { en: ['▼', '▼'], ru: ['▼', '▼'] }, special: { nonprintable: true }, capsed: false }),
      new VKButtons(5, 'ArrowRight', { locale: { en: ['►', '►'], ru: ['►', '►'] }, special: { nonprintable: true }, capsed: false }),
    ];
    this.locale = localStorage.locale || 'en';
    this.caps = false;
    this.CapsLock = false;
    this.Shift = false;
  }

  init() {
    document.body.insertAdjacentHTML('beforeend', '<section class="virtual_keyboard" id="vk_main"><textarea name="textarea" class="textarea" id="vk_textarea" cols="100" rows="10"></textarea><div class="keyboard" id="vk_keyboard"></div></section>');
    this.main = document.getElementById('vk_main');
    this.textarea = document.getElementById('vk_textarea');
    this.main.addEventListener('click', (this.clickhandle).bind(this));
    document.body.addEventListener('keydown', (this.keyhandle).bind(this));
    document.body.addEventListener('keypress', (this.keyhandle).bind(this));
    document.body.addEventListener('keyup', (this.keyhandle).bind(this));
    this.render();
    this.showinfo();
  }

  showinfo() {
    let INFO = document.querySelector('#vk_information');
    if (INFO === null) {
      this.textarea.insertAdjacentHTML('afterend', '<div class="info__container"><span class="info__text" id="vk_information"></span></div>');
    }
    INFO = document.querySelector('#vk_information');
    INFO.innerText = `Раскладка клавиатуры: ${(this.locale)} (переключение Shift + Ctrl) | Создано под Windows`;
  }

  render() {
    const keyboard = document.getElementById('vk_keyboard');
    keyboard.innerHTML = '';
    keyboard.insertAdjacentHTML('beforeend', '<div class="line_1" id="line_1"></div><div class="line_2" id="line_2"></div><div class="line_3" id="line_3"></div><div class="line_4" id="line_4"></div><div class="line_5" id="line_5"></div>');

    this.buttons.forEach((button, index) => {
      button.render(this.locale, this.caps, index, this.CapsLock, this.Shift);
    }, this);

    this.showinfo();
  }

  keyhandle(e) {
    const button = e.code;
    if (e.ctrlKey && e.shiftKey) {
      this.changeLocale();
      this.render();
    }

    if (e.type === 'keydown') {
      switch (e.code) {
        case 'CapsLock':
          if (!e.repeat) {
            this.caps = !this.caps;
            this.CapsLock = !this.CapsLock;
            this.render();
          }
          break;
        case 'Backspace':
          this.deleteChar(-1);
          break;
        case 'Delete':
          this.deleteChar(1);
          break;
        case 'ArrowLeft':
          this.changeSelectionStart(-1);
          break;
        case 'ArrowRight':
          this.changeSelectionStart(1);
          break;
        case 'ArrowUp':
          this.setSelectionOnStart();
          break;
        case 'ArrowDown':
          this.setSelectionOnEnd();
          break;

        default:
          break;
      }
    }

    if (e.shiftKey && !e.repeat) {
      this.caps = !this.caps;
      this.Shift = !this.Shift;
      this.render();
    }

    if (!e.shiftKey && this.Shift) {
      this.caps = !this.caps;
      this.Shift = !this.Shift;
      this.render();
    }

    const el = document.getElementById(`key_${button}`);
    if (el !== null && el.dataset) {
      if (e.type === 'keyup') this.printer(el.dataset.buttonChar);
      this.buttons[el.dataset.buttonPos].animation(this.CapsLock, this.Shift, false, e.type);
    }
    e.preventDefault();
  }

  clickhandle(e) {
    const el = e.target;
    if (el.dataset && el.dataset.buttonPos) {
      if (el.dataset.buttonChar) {
        this.printer(el.dataset.buttonChar);
      }

      switch (el.dataset.buttonType) {
        case 'CapsLock':
          this.caps = !this.caps;
          this.CapsLock = !this.CapsLock;
          this.render();
          break;
        case 'Backspace':
          this.deleteChar(-1);
          break;
        case 'Delete':
          this.deleteChar(1);
          break;
        case 'ArrowLeft':
          this.changeSelectionStart(-1);
          break;
        case 'ArrowRight':
          this.changeSelectionStart(1);
          break;
        case 'ArrowUp':
          this.setSelectionOnStart();
          break;
        case 'ArrowDown':
          this.setSelectionOnEnd();
          break;
        case 'ShiftLeft':
        case 'ShiftRight':
          this.caps = !this.caps;
          this.Shift = !this.Shift;
          this.render();
          break;
        case 'ControlLeft':
          if (this.Shift && !this.CapsLock) {
            this.changeLocale();
            this.render();
          }
          break;
        default:
          break;
      }

      this.buttons[el.dataset.buttonPos].animation(this.CapsLock, this.Shift);
    }
    e.preventDefault();
  }

  changeLocale() {
    this.locale = (this.locale === 'en') ? 'ru' : 'en';
    localStorage.locale = this.locale;
  }

  printer(char) {
    this.textarea.setRangeText(char, this.textarea.selectionStart, this.textarea.selectionEnd, 'end');
    this.textarea.focus();
  }

  getLength() {
    return this.textarea.value.length;
  }

  changeSelectionStart(num) {
    let pos = this.textarea.selectionStart;
    pos += num;
    if (num < 0) {
      pos = (this.textarea.selectionStart < 1) ? 0 : pos;
    }
    if (num > 0) {
      pos = (this.textarea.selectionStart === this.getLength) ? this.getLength : pos;
    }
    this.textarea.selectionStart = pos;
    this.textarea.selectionEnd = this.textarea.selectionStart;
    this.textarea.focus();
  }

  setSelectionOnStart() {
    this.textarea.selectionStart = 0;
    this.textarea.selectionEnd = this.textarea.selectionStart;
    this.textarea.focus();
  }

  setSelectionOnEnd() {
    this.textarea.selectionStart = this.textarea.value.length;
    this.textarea.selectionEnd = this.textarea.selectionStart;
    this.textarea.focus();
  }

  setSelectionPosition(num) {
    this.textarea.selectionStart = num;
    this.textarea.selectionEnd = this.textarea.selectionStart;
    this.textarea.focus();
  }

  deleteChar(num) {
    const str = this.textarea.value;
    let startPos = this.textarea.selectionStart;
    let endPos = this.textarea.selectionEnd;
    if (startPos !== endPos) {
      this.textarea.value = str.slice(0, startPos) + str.slice(endPos, str.length);
    } else {
      startPos = (num < 0) ? startPos + num : startPos;
      startPos = (startPos < 0) ? 0 : startPos;
      endPos = (num < 0) ? endPos : endPos + num;
      endPos = (endPos > str.length) ? str.length : endPos;
      this.textarea.value = str.slice(0, startPos) + str.slice(endPos, str.length);
    }
    this.setSelectionPosition(startPos);
  }
}
