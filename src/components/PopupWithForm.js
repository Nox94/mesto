import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popup, handleSubmitting) {
    super(popup);
    this._form = this._popup.querySelector(".popup__form");
    this._formFields = this._popup.querySelectorAll(".popup__form-row");
    this._handleSubmitting = handleSubmitting;
  }
  getInputValues() {
    this._inputValues = {};
    this._formFields.forEach((input) => (
      this._inputValues[input.name] = input.value
      )
    );
    return this._inputValues;
  }

  setEventListeners() {
    this._popup.addEventListener("submit", () =>
      this._handleSubmitting(this.getInputValues())
    );
    super.setEventListeners();
  }

  setInputValues(data) {
    this._formFields.forEach((input) => {
      input.value = data[input.name];
      // console.log(data);
    });
  }

  formReset(){
    this._form.reset()
    }

  close() {
    super.close();
    this._form.reset();
  }
}
