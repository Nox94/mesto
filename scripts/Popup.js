export default class Popup {
  // должен содержать общие для всех попапов вещи, без частностей
  constructor(popup) {
    //принимает единственный параметр - селектор попапа
    this._popup = document.querySelector(popup);
  }
  open() {
    //содержит публичные методы open и close
    document.addEventListener("keydown", this._handleEscClick);
    this._popup.addEventListener("click", this._handlePopupClosing);
    this._popup.classList.add("popup_opened");
  }
  close() {
    document.removeEventListener("keydown", this._handleEscClick);
    this._popup.removeEventListener("click", this._handlePopupClosing);
    this._popup.classList.remove("popup_opened");
  }

  _handleEscClick = (evt) => {
    //Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc
    if (evt.key === "Escape") {
      const active = evt.currentTarget.querySelector(".popup_opened");
      this.close(active);
    }
  }

  _handlePopupClosing = (event) => {
    // обработчик закрытия попапов по событию
    const closeBtn = event.target;
    this.close(closeBtn.closest(".popup"));
  }

  setEventListeners() {
    //Содержит публичный метод setEventListeners, он добавляет слушатель клика иконке закрытия попапа
    const popupClose = document.querySelectorAll(".popup__close");
    popupClose.forEach((item) =>
      item.addEventListener("click", this._handlePopupClosing)
    );
  }
}
