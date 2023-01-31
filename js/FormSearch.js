import { FormValidator } from './FormValidator.js';

export class FormSearch {
  constructor(searchNewsCallback) {
    this.formValidator = new FormValidator();
    this.form = document.querySelector('.form-flex');
    this.input = this.form.querySelector('.header_input');
    this.button = this.form.querySelector('.header_find-button');
    this.searchNewsCallback = searchNewsCallback;
    this.listners();
  }
  find(event) {
    event.preventDefault();
    const value = this.input.value;
    sessionStorage.setItem('request', value);
    value.length > 0 ? this.searchNewsCallback(value) : this.formValidator.checkInputValidity();
  }
  listners() {
    this.button.addEventListener('click', this.find.bind(this));
  }
}
