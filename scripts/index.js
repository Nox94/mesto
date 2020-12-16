const profileButtonEdit = document.querySelector(".profile__button-edit");
// присвоила переменной с именем ProfileButtonEditNode значение кнопки редактирования,
// выбранное методом querySelector из разметки по классу .profile__button-edit
const popup = document.querySelector(".popup-profile");
const popupClose = document.querySelector(".popup__close");
const popupCards = document.querySelector(".popup-cards");
const form = document.querySelectorAll(".popup__form");
const formFieldName = document.querySelector(".popup__form-row_type_name");
const formFieldAbout = document.querySelector(".popup__form-row_type_about");
const formFieldHeading = document.querySelector(".popup__form-row_type_heading");
const formFieldLink = document.querySelector(".popup__form-row_type_link");
const profileHeading = document.querySelector(".profile__heading");
const profileSubheading = document.querySelector(".profile__subheading");
const page = document.querySelector(".page");
const buttonAdd = document.querySelector(".profile__button-add");
const cardHeading = document.querySelector(".elements__card-heading");
const cardImage = document.querySelector(".elements__card-img");
const cardsContainer = document.querySelector(".elements");
//получила шаблон карточки себе в переменную вместе с содержимым


//работа с карточками
//создала массив с данными карточек - заголовок и изображение (и зачем???)
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
  let some = item.name;
  let somethingElse = item.link;
  addCard(some, somethingElse);
});


// рендер массива для добавления первых шести карточек на страницу при загрузке
function renderList() {
  const listItems = initialCards.map(addCard);
cardsContainer.append(...initialCards);
  };


//ф-ция создания и добавления карточки
function addCard(cardHeading, cardImage) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.cloneNode(true);
  // склонировала все содержимое шаблона карточки и сохранила в другую переменную чтобы создавать новые карточки
  cardElement.querySelector(".elements__card-heading").textContent = cardHeading;
  //наполнение содержимым - название карточки
  cardElement.querySelector(".elements__card-img").src = cardImage;
  //наполнение содержимым - src адрес карточки
  cardsContainer.prepend(cardElement);
  //добавила карточку в начало контейнера
  return cardElement;
}
//функция открытия попапов
function openAnyPopup(event) {
  const tag = event.target;
  if (tag.classList.contains("profile__button-edit")) {
    formFieldName.value = profileHeading.textContent;
    formFieldAbout.value = profileSubheading.textContent;
    popup.classList.add("popup_opened");
  } else if (tag.classList.contains("profile__button-add")) {
    popupCards.classList.add("popup_opened");
  }
}
// присвоила полям формы значения заголовка и подзаголовка со страницы и поместила их в функцию, чтобы значения в поля загружались при каждом нажатии на кнопку.
// использую функцию openAnyPopup, чтобы добавить модификатор _opened по клику пользователя на кнопку редактирования профиля

//ф-ция закрытия попапов
function closeAnyPopup(event) {
  const closeBtn = event.target;
  if (closeBtn.classList.contains("popup__close")) {
    closeBtn.closest(".popup").classList.remove("popup_opened");
  }
}
// использую функцию closeAnyPoppup, чтобы модальное окно закрывалось при нажатии пользователя на крестик

//ф-ция при нажатии на кнопку "сохранить"
function formSubmitHandler(evt) {
  evt.preventDefault();
  const button = evt.target;
  //клик по кнопке submit на popup-profile и присвоение значений полей, закрытие попапа
  if (button.closest(".popup-profile")) {
    profileHeading.textContent = formFieldName.value;
    profileSubheading.textContent = formFieldAbout.value;
    //клик по нажатию на кнопку "создать" добавляет карточку на страницу и присваивает значение из полей (?)
  } else if (button.closest(".popup-cards")) {
    addCard(formFieldHeading.value, formFieldLink.value);
  }
  button.closest(".popup").classList.remove("popup_opened");
}
// отмена стандартной отправки формы на сервер, присвоение данных из инпутов странице и вызов функции для закрытия попапа

buttonAdd.addEventListener("click", openAnyPopup);
page.addEventListener("click", closeAnyPopup);
profileButtonEdit.addEventListener("click", openAnyPopup);
form.forEach((Element) => {
  Element.addEventListener("submit", formSubmitHandler);
});
// вешаю обработчик события на кнопку формы "сохранить", чтобы данные перезаписывались и попап закрывался. функция formSubmitHandler;
