import "./index.css";
import { FormValidator } from "../components/FormValidator.js";
import Card  from "../components/Card.js";
import Section from "../components/Section.js";
import Api from "../components/Api.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import DeleteCard from "../components/DeleteCard.js";

const popupProfileSave = document.querySelector("#popupProfileSave"); //форма ред-я профиля
const popupCardElemSave = document.querySelector("#popupCardElemSave"); //форма добавления новой карточки на страницу
const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileButtonAdd = document.querySelector(".profile__button-add");
const changeAvatarIcon = document.querySelector('.profile__pencil-icon');
const submitOfPopupDelButton = document.querySelector('.popup__save_confirm');

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
  owner_id: "",
  _id: "",
  likes: "",
};

//получение данных пользователя с сервера
const api = new Api("https://mesto.nomoreparties.co/v1/cohort-20", {
  authorization: "d4a6d15c-215f-42d6-9f0c-2c3e2870f744",
  "Content-Type": "application/json",
});


// экземпляры классов валидации, запуск валидации на формах
const editProfileFormValid = new FormValidator(validationConfig, popupProfileSave);
const addCardFormValid = new FormValidator(validationConfig, popupCardElemSave);
editProfileFormValid.enableValidation();
addCardFormValid.enableValidation();

//экземпляры классов
const popupEditProfile = new PopupWithForm(".popup-profile", handleProfileSubmitting);
popupEditProfile.setEventListeners();
const popupWithImage = new PopupWithImage(".popup-image");
popupWithImage.setEventListeners();
const popupAddCard = new PopupWithForm(".popup-cards", handleCardSaving);
popupAddCard.setEventListeners();
const popupChangeAvatar = new PopupWithForm('.popup-changeAvatar', handleAvatarSubmitting)
popupChangeAvatar.setEventListeners();
const popupToDelete = new DeleteCard('.popup-remove', handleCardRemoving);
popupToDelete.setEventListeners();

const cardsList = new Section(
  {
    renderer: (cardItem) => {
      data.name = cardItem.name;
      // console.log(data.name);
      data.link = cardItem.link;
      data._id = cardItem._id;
      data.likes = cardItem.likes;
      data.owner_id = cardItem.owner._id;
      cardsList.addItem(createCard(data));
    },
  },
  ".elements"
);

//создание экземпляра класса userInfo,
//отсюда приходят данные для инпутов в попап редактирования профиля, из селекторов
const userInfo = new UserInfo({
  userName: ".profile__heading",
  userInfo: ".profile__subheading",
  userAvatar: ".profile__avatar",
});

//при нажатии на кнопку "сохранить" у попапа смены аватара
function handleAvatarSubmitting(data) {
  api
    .changeUserAvatar(data)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((result) => {
      userInfo.setUserInfo({ avatar: result.avatar });
      popupChangeAvatar.close();
    })
    .catch((err) => console.log(err));
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
      if (res.ok) {
        return res.json();
      }
    })
    .then((result) => {
      userInfo.setUserInfo(result);
      popupEditProfile.close();
    })
    .catch((err) => console.log(err));
}

function createCard(data){
  // console.log(data);
  const newCard = new Card(
    { data: data, handlerImg: handlePopupPicOpening, handlerDel: handleRemovePopupOpening },
    "#card-template"
  );
  return newCard.generateCard();
}

//удаление карточки
function handleCardRemoving(data) {
  console.log(data);
  console.log(data.card);
  console.log(data.id);
  api.removeCard(data.id).then((res) => console.log(res))
  .then(
    data.card.remove()
  ).then(
    popupToDelete.close()
  )
}

//открыть попап удаления карточки
function handleRemovePopupOpening(card, id) {
  popupToDelete.open({id: id, card: card});
}



//ф-ция при нажатии на кнопку "создать" у попапа добавления карточки
function handleCardSaving(dataSet) {
  data.name = dataSet.name;
  // console.log(data.name);
  data.link = dataSet.link;
  console.log(dataSet);
  api.createNewCard(data).then((res) => {
    cardsList.addItem(createCard(data));
  });
  
  popupAddCard.close();
}


//открыть попап смены аватара
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


//получаем на страницу данные о пользователе с сервера методом класса Api
api
  .getUserInfo()
  .then((res) => res.json())
  .then((result) => {
    userInfo.setUserInfo(result);
    // console.log(userInfo._id);
    // console.log(userInfo.returnUserId());
  });

//получение карточек с сервера
api
  .getTheCards()
  .then((res) => res.json())
  .then((result) => {
    cardsList.setCardsArray(result);
    cardsList.renderAllElements();
  });