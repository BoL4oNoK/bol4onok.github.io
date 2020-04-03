/*
 * Class for buttons.
 */

export default class VKButtons {
  /*
  * @param line - container number
  * @param options:
  *     - locale - ['en': [default, withShift]]
  *     - special - true if button is special (shift, ctrl, etc.)
  *
  */
  constructor(line, code, options = {}) {
    this.line = line;
    this.code = code;
    this.options = options;
  }

  /*
  * @param locale - current locale
  * @param caps - active Caps Lock
  */
  render(locale = 'en', caps = false, pos, capslock, shift) {
    const line = document.getElementById(`line_${this.line}`);
    let key;
    this.elem = document.createElement('button');
    this.elem.className = 'buttons';
    this.elem.id = `key_${this.code}`;
    this.elem.dataset.buttonPos = pos;
    this.elem.dataset.buttonType = this.code;
    this.elem.innerText = (caps) ? this.options.locale[locale][1] : this.options.locale[locale][0];
    if (this.options.special) {
      key = (!this.options.special.nonprintable) ? this.options.special.symbol : '';
      this.elem.dataset.buttonChar = key;
    } else {
      key = (caps) ? this.options.locale[locale][1] : this.options.locale[locale][0];
      this.elem.dataset.buttonChar = key;
    }
    if (this.code === 'CapsLock' && capslock) {
      this.elem.classList.add('buttons-fixed');
    }
    if (['ShiftLeft', 'ShiftRight'].indexOf(this.code) >= 0 && shift) {
      this.elem.classList.add('buttons-fixed');
    }
    line.insertAdjacentElement('beforeend', this.elem);
  }

  animation(capslock, shift, virtual = true, type = 'keydown') {
    if (['ShiftLeft', 'ShiftRight'].indexOf(this.code) >= 0) {
      if (shift) {
        this.elem.classList.add('buttons-fixed');
      } else {
        this.elem.classList.remove('buttons-fixed');
      }
    }

    if (this.code === 'CapsLock') {
      if (capslock) {
        this.elem.classList.add('buttons-fixed');
      } else {
        this.elem.classList.remove('buttons-fixed');
      }
    }

    if (virtual) {
      this.elem.classList.add('buttons-pressed');
      setTimeout(() => {
        this.elem.classList.remove('buttons-pressed');
      }, 500);
    } else {
      if (type === 'keydown') {
        this.elem.classList.add('buttons-pressed');
      }

      if (type === 'keyup') {
        setTimeout(() => {
          this.elem.classList.remove('buttons-pressed');
        }, 500);
      }
    }
  }
}
