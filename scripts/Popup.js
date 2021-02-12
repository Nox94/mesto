export default class Popup {
  // должен содержать общие для всех попапов вещи, без частностей
  constructor(popupSelector) {
    //принимает единственный параметр - селектор попапа
    this._popupSelector = document.querySelector(popupSelector);
  }
  open(modal) {
    //содержит публичные методы open и close
    document.addEventListener("keydown", this._handleEscClick);
    modal.addEventListener("click", this._handlePopupClosing);
    modal.classList.add("popup_opened");
  }
  close(modal) {
    document.removeEventListener("keydown", this._handleEscClick);
    modal.removeEventListener("click", this._handlePopupClosing);
    modal.classList.remove("popup_opened");
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
