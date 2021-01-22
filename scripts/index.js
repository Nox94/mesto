import { FormValidator } from './FormValidator';
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

//работа с карточками
//создала массив с данными карточек - заголовок и изображение
const initialCards = [
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

initialCards.forEach(function (item) {
  const cardText = item.name;
  const cardImageLink = item.link;
  addCard(cardsContainer, createCard(cardText, cardImageLink, cardTemplate));
});

// ф-ция создания карточки
function createCard(headingText, imageLink, template) {
  const cardElement = template.cloneNode(true);
  const cardImage = cardElement.querySelector(".elements__card-img");
  const cardHeading = cardElement.querySelector(".elements__card-heading");
  const cardDeleteButton = cardElement.querySelector(
    ".elements__remove-button"
  );
  const cardLikeButton = cardElement.querySelector(".elements__like-button");
  cardHeading.textContent = headingText; //наполнение содержимым - название карточки
  cardImage.src = imageLink; //наполнение содержимым - src адрес карточки
  cardImage.alt = headingText; //наполнение содержимым - атрибут alt у изображения карточки по ее названию

  // лайк
  cardLikeButton.addEventListener("click", likeButtonHandler);

  // удаление карточки
  cardDeleteButton.addEventListener("click", removeButtonHandler);

  // открытие попапа картинки
  cardImage.addEventListener("click", openPopupPictureHandler);
  return cardElement;
}

//ф-ция добавления карточки
function addCard(container, element) {
  container.prepend(element); //добавила карточку в начало контейнера
}
// ф-ция добавления лайка
function likeButtonHandler(event) {
  // при нажатии на кнопку сайта она получает значение переменной eventTarget, так как является активным на данный момент объектом и на ней срабатывает слушатель события по клику и функция прибавления модификатора к классу
  event.target.classList.toggle("elements__like-button_clicked");
}

// ф-ция удаления карточки
function removeButtonHandler(event) {
  event.target.closest(".elements__card").remove();
}

// ф-ция открытия попапа картинки
function openPopupPictureHandler(event) {
  //попап карточки открывается по нажатию на картинку карточки
  popupPicture.src = event.target.src; // event.target является тем объектом, на который произвели клик, в данном случае это картинка карточки, она присваивается как значение картинки попапа
  popupPicture.alt = event.target.alt; //добавляет атрибут alt изображению попапа картинки карточки по названию карточки
  const parentSearching = event.target.closest(".elements__card"); //находим в DOM родительский контейнер картинки — див со всеми элементами карточки и присваиваем его переменной
  popupCapture.textContent = parentSearching.querySelector(
    ".elements__card-heading"
  ).textContent; //берем текстовое содержимое переменной, а которой хранится подпись к картинке попапа и присваиваем ей значение заголовка карточки через поиск в родительском элементе — родителе карточки с помощью метода querySelector
  openPopup(popupImage); //делаем попап видимым после того, как он получил в себя все данные
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
  setButtonState(
    popupCardElemSave.elements.submit,
    popupCardElemSave.checkValidity(),
    validationConfig
  );
  openPopup(popupCards);
});

popupProfileSave.addEventListener("submit", profileSubmitHandler);
popupCardElemSave.addEventListener("submit", сardSaveHandler);