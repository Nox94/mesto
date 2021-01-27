export class Card {
    constructor(cardConfigurator, openPopupPictureHandler) {
        this._template = cardConfiguratoe.template,
            this._text = cardConfigurator.heading,
            this._image = cardConfigurator.image,
            this._likeButton = cardConfigurator.likeButton,
            this._deleteButton = cardConfigurator.deleteButton,
            this._openPopupPictureHandler = openPopupPictureHandler,
            this._name = cardConfigurator.name,
            this._link = cardConfigurator.link,
    }

    _createCard() { //создание карточки
        const cardElement = this._template.cloneNode(true);
        const cardImage = this._image;
        const cardHeading = this._text;
        const cardDeleteButton = this._deleteButton;
        const cardLikeButton = this._likeButton;
        cardHeading.textContent = this._text; //наполнение содержимым - название карточки 
        cardImage.src = this._link; //наполнение содержимым - src адрес карточки 
        cardImage.alt = this._name; //наполнение содержимым - атрибут alt у изображения карточки по ее названию 
        return cardElement;
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
        //лайк
        .addEventListener("click", this._likeButtonHandler);
        //удаление карточки
        .addEventListener("click", this._removeButtonHandler);
        // открытие попапа картинки
        cardImage.addEventListener("click", this._openPopupPictureHandler);
    }
}