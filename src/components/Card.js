export default class Card {
  constructor({ data, handlerImg, handlerDel }, cardSelector, api) {
    this._handler = handlerImg;
    this._handlerDelete = handlerDel;
// console.log(this._handlerDelete);//сюда приходит handleRemovePopupOpening
    this._handleRemoveButtonClick = this._handleRemoveButtonClick.bind(this);
//  console.log(this._handleRemoveButtonClick);//сюда приходит   _handleRemoveButtonClick
    this._handleLikeButtonClick = this._handleLikeButtonClick.bind(this)
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._anotherUserId = data.owner_id;
    this._imageId = data._id,
    this._likesArray = data.likes,
    this._myId = 'cff000b8f0abc422569e915b',
    this._api = api
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
    this._likeCounter.textContent = this._likesArray.length;
    if (this._likesArray.find((item) => item._id == this._myId)) {
      this._likeButton.classList.add("elements__like-button_clicked");
    };
    this._setEventListeners();
    this.checkCardCreatorId();
    return this._element;
  }

  //лайк
  _handleLikeButtonClick() {
    
    //если найден лайк - то убирай его
    if (this._likesArray.find((item) => item._id == this._myId)) {
      this._api
      //метод удаления
        .removeLike(this._imageId)
        .then((res) => {
          // console.log(res);
          // console.log(res.likes.length);
          this._likeButton.classList.remove("elements__like-button_clicked");
          this._likesArray = res.likes;
          this._likeCounter.textContent = res.likes.length;
        })
        .catch((err) => console.log(err));
    } else {
      this._api
      //метод добавления
        .addLike(this._imageId)
        .then((res) => {
          this._likeCounter.textContent = res.likes.length;
          this._likeButton.classList.add("elements__like-button_clicked");
          this._likesArray = res.likes;
        })
        .catch((err) => console.log(err));
    }
  }

//проверка совпадения по Id
  checkCardCreatorId(){
    if(this._myId != this._anotherUserId){
      this._deleteButton.classList.add('invisible');
      // console.log(this._myId != this._anotherUserId);
    }
  }

  //открытие попапа удаления карточки
  _handleRemoveButtonClick(event) {
    const currentCard = event.target.closest(".elements__card");
    this._handlerDelete(currentCard, this._imageId);
  }
  

  _setEventListeners() {
    //лайк
    this._likeButton.addEventListener("click", this._handleLikeButtonClick);
    //открытие попапа удаления карточки
    this._deleteButton.addEventListener("click", this._handleRemoveButtonClick);
    // открытие попапа картинки
    this._image.addEventListener("click", () => {
      this._handler({ src: this._link, name: this._name });
    });
  }
}