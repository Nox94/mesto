import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popup, handleSubmitting) {
    super(popup);
    this._form = this._popup.querySelector(".popup__form");
    this._formFields = this._popup.querySelectorAll(".popup__form-row");
    this._handleSubmitting = handleSubmitting;
  }
  _getInputValues() {
    this._inputValues = {};
    //console.log(this._inputValues)
    this._formFields.forEach((input) => (
      this._inputValues[input.name] = input.value
      )
    );
    console.log('show input values:'); console.log(this._inputValues)
    return this._inputValues;
  }

  setEventListeners() {
    this._popup.addEventListener("submit", () =>
      this._handleSubmitting(this._getInputValues())
    );
    super.setEventListeners();
  }

  setInputValues(data) {
    this._formFields.forEach((input) => {
      input.value = data[input.name];
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
