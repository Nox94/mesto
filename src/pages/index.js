import "./index.css";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import initialCards from "../components/array_initialCards.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const popupProfileSave = document.querySelector("#popupProfileSave"); //форма ред-я профиля
const popupCardElemSave = document.querySelector("#popupCardElemSave"); //форма добавления новой карточки на страницу
const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileButtonAdd = document.querySelector(".profile__button-add");
const changeAvatarIcon = document.querySelector('.profile__pencil-icon');

// данные форм для передачи их классу FormValidator
const validationConfig = {
  inputSelector: ".popup__form-row",
  submitButtonSelector: ".popup__save",
  inputInvalidClass: "popup__input_state_invalid",
  buttonInvalidClass: "popup__save_invalid",
};

// данные карточки для передачи их классу Card
const data = {
  image: ".elements__card-img",
  heading: ".elements__card-heading",
  deleteButton: ".elements__remove-button",
  likeButton: ".elements__like-button",
  name: "",
  link: "",
};

//получение данных пользователя с сервера
const api = new Api("https://mesto.nomoreparties.co/v1/cohort-20", {
  authorization: "d4a6d15c-215f-42d6-9f0c-2c3e2870f744",
  "Content-Type": "application/json",
});

//получаем на страницу данные о пользователе с сервера методом класса Api
api
  .getUserInfo()
  .then((res) => res.json())
  .then((result) => {
    userInfo.setUserInfo(result);
    console.log(result);
  });

// экземпляры классов валидации, запуск валидации на формах
const editProfileFormValid = new FormValidator(
  validationConfig,
  popupProfileSave
);

const addCardFormValid = new FormValidator(validationConfig, popupCardElemSave);

editProfileFormValid.enableValidation();
addCardFormValid.enableValidation();

const cardsList = new Section(
  {
    renderer: (cardItem) => {
      data.name = cardItem.name;
      data.link = cardItem.link;
      const newCard = new Card(
        { data: data, handler: handlePopupPicOpening },
        "#card-template"
      );
      cardsList.addItem(newCard.generateCard());
    },
  },
  ".elements"
);

api
  .getTheCards()
  .then((res) => res.json())
  .then((result) => {
    cardsList.setCardsArray(result);
    cardsList.renderAllElements();
  });

const popupEditProfile = new PopupWithForm(
  ".popup-profile",
  handleProfileSubmitting
);
popupEditProfile.setEventListeners();

const popupWithImage = new PopupWithImage(".popup-image");
popupWithImage.setEventListeners();
const popupAddCard = new PopupWithForm(".popup-cards", handleCardSaving);
popupAddCard.setEventListeners();
const popupChangeAvatar = new PopupWithForm('.popup-changeAvatar', handleAvatarSubmitting)

//создание экземпляра класса userInfo,
//отсюда приходят данные для инпутов в попап редактирования профиля, из селекторов
const userInfo = new UserInfo({
  userName: ".profile__heading",
  userInfo: ".profile__subheading",
  userAvatar: ".profile__avatar",
});
console.log(userInfo);

function handleAvatarSubmitting(){
  popupChangeAvatar.setInputValues(data);
  popupChangeAvatar.close();
}

// обработчик ф-ции открытия попапа картинки
function handlePopupPicOpening(data) {
  popupWithImage.open(data);
}

//ф-ция при нажатии на кнопку "сохранить" у попапа редактирования профиля
function handleProfileSubmitting(data) {
  api
    .saveUserInfo(data)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((result) => {
      userInfo.setUserInfo(result);
      console.log(result);
      popupEditProfile.close();
    })
    .catch((err) => console.log(err));
}

//ф-ция при нажатии на кнопку "создать" у попапа добавления карточки
function handleCardSaving(dataSet) {
  data.name = dataSet.Heading;
  data.link = dataSet.Link;
  const newCard = new Card(
    { data: data, handler: handlePopupPicOpening },
    "#card-template"
  );
  cardsList.addItem(newCard.generateCard());
  popupAddCard.close();
}

changeAvatarIcon.addEventListener('click', () => {
  popupChangeAvatar.setEventListeners();
  popupChangeAvatar.setInputValues(userInfo.getUserInfo());
  popupChangeAvatar.open();
})

//открыть попап редактирования профиля
profileButtonEdit.addEventListener("click", () => {
  editProfileFormValid.hideErrors();
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  popupEditProfile.open();
});
//открыть попап добавления карточки
profileButtonAdd.addEventListener("click", () => {
  addCardFormValid.hideErrors();
  popupAddCard.formReset();
  popupAddCard.open();
});
