import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import initialCards from "./array_initialCards.js";
import Section from './Section.js';
const popupProfile = document.querySelector(".popup-profile"); //popup edit
const popupCards = document.querySelector(".popup-cards"); //popup add cards
const popupImage = document.querySelector(".popup-image"); //popup card image
const popupClose = document.querySelectorAll(".popup__close");
const popupProfileSave = document.querySelector("#popupProfileSave"); //форма ред-я профиля
const popupCardElemSave = document.querySelector("#popupCardElemSave"); //форма добавления новой карточки на страницу
const formFieldName = document.querySelector(".popup__form-row_type_name");
const formFieldAbout = document.querySelector(".popup__form-row_type_about");
const formFieldHeading = document.querySelector(
  ".popup__form-row_type_heading"
);
const formFieldLink = document.querySelector(".popup__form-row_type_link");
const profileHeading = document.querySelector(".profile__heading");
const profileSubheading = document.querySelector(".profile__subheading");
const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileButtonAdd = document.querySelector(".profile__button-add");
const cardsContainer = document.querySelector(".elements");
const popupPicture = document.querySelector(".popup__picture");
const popupCapture = document.querySelector(".popup__capture");

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

const cardsList = new Section({
  data: initialCards,
  renderer: (cardItem) => {
      data.name = cardItem.name;
      data.link = cardItem.link;
      const newCard = new Card(data, "#card-template", handlePopupPicOpening);
      cardsList.addItem(newCard.generateCard());
    }
},
    '.elements'
  );
cardsList.renderAllElements();


// // создание нового экземпляра класса Card на каждый элемент массива
// initialCards.forEach((item) => {
//   data.name = item.name;
//   data.link = item.link;
//   const newCard = new Card(data, "#card-template", handlePopupPicOpening);
//   addCard(cardsContainer, newCard.generateCard());
// });

// // добавление карточки
// function addCard(container, element) {
//   container.prepend(element); //добавила карточку в начало контейнера
// }

// обработчик закрытия попапа
function handlePopupClosing(evt) {
  if (evt.target === evt.currentTarget) {
    closeAnyPopup(evt.currentTarget);
  }
}

// обработчик по нажатию на крестик
function handlePopupEscaping(evt) {
  if (evt.key === "Escape") {
    const active = evt.currentTarget.querySelector(".popup_opened");
    closeAnyPopup(active);
  }
}

// обработчик ф-ции открытия попа картинки
function handlePopupPicOpening(data) {
  popupPicture.src = data.src;
  popupPicture.alt = data.name;
  popupCapture.textContent = data.name;
  openPopup(popupImage);
}

// функция открытия попапов
function openPopup(modal) {
  document.addEventListener("keydown", handlePopupEscaping);
  modal.addEventListener("click", handlePopupClosing);
  modal.classList.add("popup_opened");
}

// обработчик закрытия попапов по событию
function handleAnyPopupClosing(event) {
  const closeBtn = event.target;
  closeAnyPopup(closeBtn.closest(".popup"));
}
//ф-ция закрытия попапов
function closeAnyPopup(popupWindow) {
  document.removeEventListener("keydown", handlePopupEscaping);
  popupWindow.removeEventListener("click", handlePopupClosing);
  popupWindow.classList.remove("popup_opened");
}

//ф-ция при нажатии на кнопку "сохранить" у попапа редактирования профиля
function handleProfileSubmitting(evt) {
  evt.preventDefault();
  profileHeading.textContent = formFieldName.value;
  profileSubheading.textContent = formFieldAbout.value;
  closeAnyPopup(popupProfile);
}

//ф-ция при нажатии на кнопку "создать" у попапа добавления карточки
function handleCardSaving(evt) {
  evt.preventDefault();
  data.name = formFieldHeading.value;
  data.link = formFieldLink.value;
  const newCard = new Card(data, "#card-template", handlePopupPicOpening);
  addCard(cardsContainer, newCard.generateCard());
  closeAnyPopup(popupCards);
  popupCardElemSave.reset();
}

// слушатели событий
popupClose.forEach((item) =>
  item.addEventListener("click", handleAnyPopupClosing)
);

profileButtonEdit.addEventListener("click", () => {
  formFieldName.value = profileHeading.textContent;
  formFieldAbout.value = profileSubheading.textContent;
  openPopup(popupProfile);
});

profileButtonAdd.addEventListener("click", () => {
  addCardFormValid.setButtonState();
  openPopup(popupCards);
});

popupProfileSave.addEventListener("submit", handleProfileSubmitting);
popupCardElemSave.addEventListener("submit", handleCardSaving);
