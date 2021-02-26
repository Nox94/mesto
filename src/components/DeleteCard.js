import Popup from "./Popup.js";
export default class DeleteCard extends Popup {
  constructor(popup, handleSubmitting){
super(popup);
this._handler = handleSubmitting;
  }
  setEventListeners(){
    super.setEventListeners();
  }
  
}