import Popup from "./Popup.js";
export default class DeleteCard extends Popup {
  constructor(popup, handleSubmitting) {
    super(popup);
    this._handler = handleSubmitting;
    this._handler = this._handler.bind(this);
    this._submitButton = document.querySelector(".popup__save_confirm");
  }

open(data){
  super.open();
  this._data = data;
}

  setEventListeners() {
    this._submitButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handler(this._data);
    });
    super.setEventListeners();
  }
}
