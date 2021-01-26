import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
const popupProfile = document.querySelector(".popup-profile"); //popup edit
const popupCards = document.querySelector(".popup-cards"); //popup add cards
const popupImage = document.querySelector(".popup-image"); //popup card image
const popupClose = document.querySelectorAll(".popup__close");
const popupProfileSave = document.querySelector("#popupProfileSave"); //форма ред-я профиля
const popupCardElemSave = document.querySelector("#popupCardElemSave"); //форма добавления новой карточки на страницу
const formFieldName = document.querySelector(".popup__form-row_type_name");
const formFieldAbout = document.querySelector(".popup__form-row_type_about");
const formFieldHeading = document.querySelector(".popup__form-row_type_heading");
const formFieldLink = document.querySelector(".popup__form-row_type_link");
const profileHeading = document.querySelector(".profile__heading");
const profileSubheading = document.querySelector(".profile__subheading");
const profileButtonEdit = document.querySelector(".profile__button-edit");
const profileButtonAdd = document.querySelector(".profile__button-add");
const cardsContainer = document.querySelector(".elements");
const popupPicture = document.querySelector(".popup__picture");
const popupCapture = document.querySelector(".popup__capture");
const cardTemplate = document.querySelector("#card-template").content; //получила шаблон карточки себе в переменную вместе с содержимым

const validationConfig = {
  inputSelector: '.popup__form-row',
  submitButtonSelector: '.popup__save',
  inputInvalidClass: 'popup__input_state_invalid',
  buttonInvalidClass: 'popup__submit_invalid',
};

const editProfileFormValid = new FormValidator(validationConfig, popupProfileSave);
const addCardFormValid = new FormValidator(validationConfig, popupCardElemSave);
editProfileFormValid.enableValidation();
addCardFormValid.enableValidation();

const newCard = new Card(initialCards, );

//работа с карточками
//создала массив с данными карточек - заголовок и изображение
export const initialCards = [
  {
    name: "Архыз",
    link: "./images/arkhyz.jpg",
  },
  {
    name: "Эльбрус",
    link: "./images/elbrus.jpg",
  },
  {
    name: "Карачаевск",
    link: "./images/karachaevsk.jpg",
  },
  {
    name: "Пятигорск",
    link: "./images/pyatigorsk.jpg",
  },
  {
    name: "Сочи",
    link: "./images/sochi.jpg",
  },
  {
    name: "Архыз",
    link: "./images/arkhyz.jpg",
  },
];

initialCards.forEach((item) => {
  const cardText = item.name;
  const cardImageLink = item.link;
  addCard(cardsContainer, createCard(cardText, cardImageLink, cardTemplate));
});

//добавление карточки
function addCard(container, element) {
  container.prepend(element); //добавила карточку в начало контейнера
}


function popupCloseHandler(evt) {
  if (evt.target === evt.currentTarget) {
    closeAnyPopup(evt.currentTarget);
  }
}

function popupEscapeHandler(evt) {
  if (evt.key === "Escape") {
    const active = evt.currentTarget.querySelector('.popup_opened');
    closeAnyPopup(active);
  }
}

// функция открытия попапов
function openPopup(modal) {
  document.addEventListener('keydown', popupEscapeHandler);
  modal.addEventListener('click', popupCloseHandler);
  modal.classList.add("popup_opened");
}

//ф-ция-обработчик закрытия попапов по событию
function handlerCloseAnyPopup(event) {
  const closeBtn = event.target;
  closeAnyPopup(closeBtn.closest(".popup"));
}
//ф-ция закрытия попапов
function closeAnyPopup(popupWindow) {
  document.removeEventListener('keydown', popupEscapeHandler);
  popupWindow.removeEventListener('click', popupCloseHandler);
  popupWindow.classList.remove("popup_opened");
}

//ф-ция при нажатии на кнопку "сохранить" у попапа редактирования профиля
function profileSubmitHandler(evt) {
  evt.preventDefault();
  profileHeading.textContent = formFieldName.value;
  profileSubheading.textContent = formFieldAbout.value;
  closeAnyPopup(popupProfile);
}

//ф-ция при нажатии на кнопку "создать" у попапа добавления карточки
function сardSaveHandler(evt) {
  evt.preventDefault();
  addCard(
    cardsContainer,
    createCard(formFieldHeading.value, formFieldLink.value, cardTemplate)
  );
  closeAnyPopup(popupCards);
  popupCardElemSave.reset();
}

// слушатели событий
popupClose.forEach((item) =>
  item.addEventListener("click", handlerCloseAnyPopup)
);

profileButtonEdit.addEventListener("click", () => {
  formFieldName.value = profileHeading.textContent;
  formFieldAbout.value = profileSubheading.textContent;
  openPopup(popupProfile);
});

profileButtonAdd.addEventListener("click", () => {
  editProfileFormValid._setButtonState();
  openPopup(popupCards);
});

popupProfileSave.addEventListener("submit", profileSubmitHandler);
popupCardElemSave.addEventListener("submit", сardSaveHandler);