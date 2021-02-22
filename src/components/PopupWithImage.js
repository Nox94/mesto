import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupPicture = this._popup.querySelector(".popup__picture");
    this._popupCapture = this._popup.querySelector(".popup__capture");
  }
  open(data) {
    this._popupPicture.src = data.src;
    this._popupPicture.alt = data.name;
    this._popupCapture.textContent = data.name;
    super.open();
  }
}