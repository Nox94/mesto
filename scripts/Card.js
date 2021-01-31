export class Card {
    constructor(data, cardSelector, openPopupPictureHandler) {
        this._text = data.heading,
        this._image = data.image,
        this._likeButtonSelector = data.likeButton,
        this._deleteButtonSelector = data.deleteButton,
        this._openPopupPictureHandler = openPopupPictureHandler,
        this._name = data.name,
        this._link = data.link,
        this._cardSelector = cardSelector
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.elements__card').cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.elements__card-img');
        this._element.querySelector('.elements__card-img').src = this._link;
        this._element.querySelector('.elements__card-heading').textContent = this._name;
        this._likeButton = this._element.querySelector('.elements__like-button');
        this._deleteButton = this._element.querySelector('.elements__remove-button');
        this._setEventListeners();
        return this._element;
    }

    //добавление лайка
    _likeButtonHandler(event) {
        event.target.classList.toggle("elements__like-button_clicked");
    }

    //удаление карточки
    _removeButtonHandler(event) {
        event.target.closest(".elements__card").remove();
    }

    _setEventListeners() {
        console.log(this._image);
        //лайк
        this._likeButton.addEventListener('click', this._likeButtonHandler);
        //удаление карточки
        this._deleteButton.addEventListener('click', this._removeButtonHandler);
        // открытие попапа картинки
        this._image.addEventListener('click', () => {
            this._openPopupPictureHandler({src: this._link, name: this._name});
        });
       
    }
}