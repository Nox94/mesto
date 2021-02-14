import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
  constructor(popup){
    super(popup),
    this._form = this._popup.querySelector('.popup__form'),
    this._formField = this._form.querySelector('.popup__form-row')
  }
  _getInputValues(){
    // this._formField.value = profileHeading.textContent;
    // this._formField.value = profileSubheading.textContent;
  }

  setEventListeners(){
    this._popup.addEventListener("submit", handleProfileSubmitting);
    super.setEventListeners();
  }

  close(){
    const popupProfileSave = document.querySelector("#popupProfileSave"); //форма ред-я профиля
    popupProfileSave.reset();
    super.close();
  }
}