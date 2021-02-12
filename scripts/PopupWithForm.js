import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
  constructor(popup, handleProfileSubmitting){
    super(popup);
  }
  _getInputValues(){

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