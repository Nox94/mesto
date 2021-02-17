export class FormValidator {
  constructor(validationConfig, form) {
      this._inputInvalidClass = validationConfig.inputInvalidClass,
      this._buttonInvalidClass = validationConfig.buttonInvalidClass,
      this._form = form;
      this._submitButton = this._form.querySelector(validationConfig.submitButtonSelector);
      this._inputsList = this._form.querySelectorAll(validationConfig.inputSelector);
    }
    _showError(input) { //показать ошибку (приватный)
      const error = this._form.querySelector(`#${input.id}-error`);
      error.textContent = input.validationMessage;
      input.classList.add(this._inputInvalidClass);
    }
    _hideError(input) { //скрыть ошибку (приватный)
      const error = this._form.querySelector(`#${input.id}-error`);
      error.textContent = '';
      input.classList.remove(this._inputInvalidClass);
    }

    hideErrors(){
      this._inputsList.forEach((input) => {
        this._hideError(input);
        this.setButtonState();
    });
    }

  checkInputValidity(input) { //проверка валидации полей формы (приватный)
    if (!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
  }

  setButtonState() { //проверка состояния кнопки сабмита (приватный)
    if (this._form.checkValidity()) {
      this._submitButton.classList.remove(this._buttonInvalidClass);
      this._submitButton.disabled = false;
    } else {
      this._submitButton.classList.add(this._buttonInvalidClass);
      this._submitButton.disabled = true;
    }
  }

  setEventListeners() { //обработчики данных ввода форм (приватный)
    this._inputsList.forEach((input) => {
        input.addEventListener('input', () => {
            this.checkInputValidity(input);
            this.setButtonState();
        });
    });
}

  enableValidation() { //запуск валидации (публичный)
      this.setEventListeners();
      this._form.addEventListener('submit', (evt) => {
          evt.preventDefault();
      });
      this.setButtonState();
  }
}