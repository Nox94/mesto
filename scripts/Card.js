export class Card {
    constructor(text, image) {
        this._template = cardTemplate,
            this._text = text,
            this._image = image
    }

    _createCard() { //создание карточки
        const cardElement = template.cloneNode(true);
        const cardImage = cardElement.querySelector(".elements__card-img");
        const cardHeading = cardElement.querySelector(".elements__card-heading");
        const cardDeleteButton = cardElement.querySelector(".elements__remove-button");
        const cardLikeButton = cardElement.querySelector(".elements__like-button");
        cardHeading.textContent = headingText; //наполнение содержимым - название карточки
        cardImage.src = imageLink; //наполнение содержимым - src адрес карточки
        cardImage.alt = headingText; //наполнение содержимым - атрибут alt у изображения карточки по ее названию
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

    _openPopupPictureHandler(event) {
        //попап карточки открывается по нажатию на картинку карточки
        popupPicture.src = event.target.src; // event.target является тем объектом, на который произвели клик, в данном случае это картинка карточки, она присваивается как значение картинки попапа
        popupPicture.alt = event.target.alt; //добавляет атрибут alt изображению попапа картинки карточки по названию карточки
        const parentSearching = event.target.closest(".elements__card"); //находим в DOM родительский контейнер картинки — див со всеми элементами карточки и присваиваем его переменной
        popupCapture.textContent = parentSearching.querySelector(
            ".elements__card-heading"
        ).textContent; //берем текстовое содержимое переменной, а которой хранится подпись к картинке попапа и присваиваем ей значение заголовка карточки через поиск в родительском элементе — родителе карточки с помощью метода querySelector
        openPopup(popupImage); //делаем попап видимым после того, как он получил в себя все данные
    }

    _setEventListeners() {
        //лайк
        cardLikeButton.addEventListener("click", this._likeButtonHandler);
        //удаление карточки
        cardDeleteButton.addEventListener("click", this._removeButtonHandler);
        // открытие попапа картинки
        cardImage.addEventListener("click", this._openPopupPictureHandler);
    }
}

