export default class Popup {
  constructor(popup) {
    //принимает единственный параметр - селектор попапа
    this._popup = document.querySelector(popup);
    this._closeBtn = this._popup.querySelector('.popup__close')
    this.close = this.close.bind(this)
    this._handleEscClick = this._handleEscClick.bind(this)
  }
  open() {
    document.addEventListener("keydown", this._handleEscClick);
    this._popup.classList.add("popup_opened");
  }
  close() {
    document.removeEventListener("keydown", this._handleEscClick);
    this._popup.classList.remove("popup_opened");
  }

  _handleEscClick (evt){
    if (evt.key === "Escape") {
      this.close();
    }
  }

  _handlePopupClosing (evt){
    if (evt.target === evt.currentTarget){
      this.close();
    }
  }
//Содержит публичный метод setEventListeners, он добавляет слушатель клика иконке закрытия попапа
  setEventListeners() {
    this._popup.addEventListener("click", (evt) => this._handlePopupClosing(evt));
    this._closeBtn.addEventListener("click", this.close);
  }
}
