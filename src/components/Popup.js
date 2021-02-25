export default class Popup {
  // должен содержать общие для всех попапов вещи, без частностей
  constructor(popup) {
    //принимает единственный параметр - селектор попапа
    this._popup = document.querySelector(popup);
    this._closeBtn = this._popup.querySelector('.popup__close')
    this.close = this.close.bind(this)
    this._handleEscClick = this._handleEscClick.bind(this)
  }
  open() {
    //содержит публичные методы open и close
    document.addEventListener("keydown", this._handleEscClick);
    
    this._popup.classList.add("popup_opened");
  }
  close() {
    document.removeEventListener("keydown", this._handleEscClick);
    this._popup.classList.remove("popup_opened");
  }

  _handleEscClick (evt){
    //Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc
    if (evt.key === "Escape") {
      // const active = evt.currentTarget.querySelector(".popup_opened");
      this.close();
    }
  }

  _handlePopupClosing (evt){
    if (evt.target === evt.currentTarget){
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener("click", (evt) => this._handlePopupClosing(evt));
    //Содержит публичный метод setEventListeners, он добавляет слушатель клика иконке закрытия попапа
    this._closeBtn.addEventListener("click", this.close);
  }
}
