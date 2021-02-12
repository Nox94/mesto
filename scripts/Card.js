export class Card {
  constructor({ data, handlePopupPicOpening }, cardSelector) {
    (this._handlePopupPicOpening = handlePopupPicOpening),
    (this._name = data.name),
    (this._link = data.link),
    (this._cardSelector = cardSelector);
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__card")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._image = this._element.querySelector(".elements__card-img");
    this._element.querySelector(".elements__card-img").src = this._link;
    this._element.querySelector(
      ".elements__card-heading"
    ).textContent = this._name;
    this._likeButton = this._element.querySelector(".elements__like-button");
    this._deleteButton = this._element.querySelector(
      ".elements__remove-button"
    );
    this._setEventListeners();
    return this._element;
  }

  //добавление лайка
  _handleLikeButtonClick(event) {
    event.target.classList.toggle("elements__like-button_clicked");
  }

  //удаление карточки
  _handleRemoveButtonClick(event) {
    event.target.closest(".elements__card").remove();
  }

  _setEventListeners() {
    //лайк
    this._likeButton.addEventListener("click", this._handleLikeButtonClick);
    //удаление карточки
    this._deleteButton.addEventListener("click", this._handleRemoveButtonClick);
    // открытие попапа картинки
    this._image.addEventListener("click", () => {
      this._handlePopupPicOpening({ src: this._link, name: this._name });
    });
  }
}
