import './index.css';
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import initialCards from "../components/array_initialCards.js";
import Section from "../components/Section.js";

import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

const popupProfileSave = document.querySelector("#popupProfileSave"); //форма ред-я профиля
const popupCardElemSave = document.querySelector("#popupCardElemSave"); //форма добавления новой карточки на страницу
const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileButtonAdd = document.querySelector(".profile__button-add");


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
    data: initialCards,
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
cardsList.renderAllElements();

const popupEditProfile = new PopupWithForm(
  ".popup-profile",
  handleProfileSubmitting
);
popupEditProfile.setEventListeners();
const popupWithImage = new PopupWithImage(".popup-image");
popupWithImage.setEventListeners();
const popupAddCard = new PopupWithForm(".popup-cards", handleCardSaving);
popupAddCard.setEventListeners();
const userInfo = new UserInfo({
  userName: ".profile__heading",
  userInfo: ".profile__subheading",
});

// обработчик ф-ции открытия попапа картинки
function handlePopupPicOpening(data) {
  popupWithImage.open(data);
}

//ф-ция при нажатии на кнопку "сохранить" у попапа редактирования профиля
function handleProfileSubmitting(data) {
  // userInfo.setUserInfo({Name: data.Name, About: data.About});
  userInfo.setUserInfo(data);
  popupEditProfile.close();
}

//ф-ция при нажатии на кнопку "создать" у попапа добавления карточки
function handleCardSaving(dataSet) {
  console.log(dataSet);
  data.name = dataSet.Heading;
  data.link = dataSet.Link;
  console.log(data);
  const newCard = new Card(
    { data: data, handler: handlePopupPicOpening },
    "#card-template"
  );
  cardsList.addItem(newCard.generateCard());
  popupAddCard.close();
}

profileButtonEdit.addEventListener("click", () => {
  editProfileFormValid.hideErrors();
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  popupEditProfile.open();
});

profileButtonAdd.addEventListener("click", () => {
  addCardFormValid.hideErrors();
  popupAddCard.formReset();
  popupAddCard.open();
});