export class FormValidator {
  constructor(validationConfig, formSelector) {
    const validationConfig = {
      this._formSelector: '.popup__form',
      this._inputSelector: '.popup__form-row',
      this._submitButtonSelector: '.popup__save',
      this._inputInvalidClass: 'popup__form-row_state_invalid',
      this._buttonInvalidClass: 'popup__save_invalid',
  }
  }
  _checkInputValidity(form, input, config) { //проверка валидации полей формы (приватный)
    if (!input.validity.valid) {
      showError(form, input, config);
    } else {
      hideError(form, input, config);
    }
  }
  _setButtonState(button, isActive, config) { //проверка состояния кнопки сабмита (приватный)
    if (isActive) {
      button.classList.remove(config.buttonInvalidClass);
      button.disabled = false;
    } else {
      button.classList.add(config.buttonInvalidClass);
      button.disabled = true;
    }
  }
  _setEventListeners(form, config) { //обработчики событий по клику (приватный)
    const inputsList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitButtonSelector);
    inputsList.forEach((input) => {
        input.addEventListener('input', () => {
            checkInputValidity(form, input, config);
            setButtonState(submitButton, form.checkValidity(), config);
        });
    });
}
  _showError(form, input, config) { //показать ошибку (приватный)
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = input.validationMessage;
  input.classList.add(config.inputInvalidClass);
}
  _hideError(form, input, config) { //скрыть ошибку (приватный)
  const error = form.querySelector(`#${input.id}-error`);
  error.textContent = '';
  input.classList.remove(config.inputInvalidClass);
}

  enableValidation(config) { //запуск валидации (публичный)
  const forms = document.querySelectorAll(config.formSelector);
  forms.forEach((form) => {
      setEventListeners(form, config);
      form.addEventListener('submit', (evt) => {
          evt.preventDefault();
      });
      const submitButton = form.querySelector(config.submitButtonSelector);
      setButtonState(submitButton, form.checkValidity(), config)
  });
}
  enableValidation(validationConfig);
}


new FormValidator(validationConfig, popupProfileSave);
new FormValidator(validationConfig, popupCardElemSave);