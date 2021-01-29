export class Card {
    constructor(data, cardSelector) {
        this._text = data.heading,
        this._image = data.image,
        this._likeButton = data.likeButton,
        this._deleteButton = data.deleteButton,
        this._openPopupPictureHandler = openPopupPictureHandler,
        this._name = data.name,
        this._link = data.link,
        this._cardSelector = cardSelector,
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('#card-template').cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._element.querySelector('.elements__card-img').src = this._image;
        this._element.querySelector('.elements__card-heading').textContent = this._text;
        this._setEventListeners();
        return this._element;
    }

    //добавление лайка
    _likeButtonHandler(event) {
        event.target.classList.toggle("elements__like-button_clicked");
    }

    //удаление карточки
    _removeButtonHandler() {
        event.target.closest(".elements__card").remove();
    }

    _setEventListeners() {
        //лайк
        cardLikeButton.addEventListener('click', () => {
            this._likeButtonHandler();
        });
        //удаление карточки
        cardDeleteButton.addEventListener('click', () => {
            this._removeButtonHandler();
        });
        // открытие попапа картинки
        cardImage.addEventListener(('click', () => {
            this._openPopupPictureHandler();
        })
    }