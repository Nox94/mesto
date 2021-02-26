export class Card {
  constructor({ data, handlerImg, handlerDel }, cardSelector) {
    this._handler = handlerImg;
    this._handlerDelete = handlerDel;
    this._handleRemoveButtonClick = this._handleRemoveButtonClick.bind(this);
    this._handleLikeButtonClick = this._handleLikeButtonClick.bind(this)
    this._cardSelector = cardSelector;
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.ownerId;
    this._imgId = data.id,
    this._likes = data.likes,
    this._userId = data.userId
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
    this._element.querySelector(".elements__card-heading").textContent = this._name;
    this._likeButton = this._element.querySelector(".elements__like-button");
    this._deleteButton = this._element.querySelector(".elements__remove-button");
    this._likeCounter = this._element.querySelector('.elements__counter');
    this._setEventListeners();
    return this._element;
  }

  //добавление лайка
  _handleLikeButtonClick(event) {
    event.target.classList.toggle("elements__like-button_clicked");
  }

  //хендлер кнопки удаления
  _handleRemoveButtonClick(event) {
    const currentCard = event.target.closest(".elements__card"); //определяет на какой карточке сработало событие
    console.log(this._handlerDelete); // не определен
    this._currentCardId = this._imgId;
    console.log(this._imgId);
    console.log(this._currentCardId);
    this._handlerDelete(currentCard, this._currentCardId); //должен быть передан параметр текущей карточки и id карточки
  }

  _setEventListeners() {
    //лайк
    this._likeButton.addEventListener("click", this._handleLikeButtonClick);
    //подтверждение удаления карточки
    this._deleteButton.addEventListener("click", this._handleRemoveButtonClick); //обработчик срабатывает по клику на мусорку
    // открытие попапа картинки
    this._image.addEventListener("click", () => {
      this._handler({ src: this._link, name: this._name });
    });

  }
}
