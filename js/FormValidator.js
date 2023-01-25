export class FormValidator {
  constructor() {
    this.form = document.querySelector('.form-flex');
    this.input = this.form.querySelector('.header_input');
    this.validError = document.querySelector('.header_input-error');
    this.button = this.form.querySelector('.header_find-button');
    this.setEventListeners();
  }
  checkInputValidity() {
    if (this.input.validity.valid) {
      this.validError.textContent = '';
      this.button.removeAttribute('disabled');
    } else {
      this.validError.textContent = 'Нужно ввести ключевое слово';
      this.button.setAttribute('disabled', true);
    }
  }

  setEventListeners() {
    this.form.addEventListener('input', this.checkInputValidity.bind(this));
  }
}
