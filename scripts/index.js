let profileButtonEdit = document.querySelector(".profile__button-edit");
// присвоила переменной с именем ProfileButtonEditNode значение кнопки редактирования,
// выбранное методом querySelector из разметки по классу .profile__button-edit
let popup = document.querySelector(".popup-profile");
let popupClose = document.querySelector(".popup__close");
let popupCards = document.querySelector(".popup-cards");
let form = document.querySelectorAll(".popup__form");
let formFieldName = document.querySelector(".popup__form-row_type_name");
let formFieldAbout = document.querySelector(".popup__form-row_type_about");
let formFieldHeading = document.querySelector('.popup__form-row_type_heading');
let formFieldLink = document.querySelector('.popup__form-row_type_link');
let profileHeading = document.querySelector(".profile__heading");
let profileSubheading = document.querySelector(".profile__subheading");
let page = document.querySelector(".page");
let buttonAdd = document.querySelector('.profile__button-add');
let cardHeading = document.querySelector('.elements__card-heading');
let cardImage = document.querySelector('.elements__card-img');
let cardsContainer = document.querySelector('.elements');
//работа с карточками

//создала массив с данными карточек - заголовок и изображение (и зачем???)
const initialCards = [
  {
    name: "Домбай",
    link: "./images/dombai.jpg",
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
// рендер массива (???)
function renderElements() {
  let cardsArray = initialCards.map(addCard);
  cardsContainer.prepend(cardElement);
}

//ф-ция создания и добавления (?) карточки
function addCard(cardHeading, cardImage) {
  let cardTemplate = document.querySelector('#card-template').content;
  //получила шаблон карточки себе в переменную вместе с содержимым
  let cardElement = cardTemplate.cloneNode(true);
  // склонировала все содержимое шаблона карточки и сохранила в другую переменную чтобы создавать новые карточки
  cardElement.querySelector('.elements__card-heading').textContent = cardHeading;
  //наполнение содержимым - название карточки
  cardElement.querySelector('.elements__card-img').src = cardImage;
  //наполнение содержимым - src адрес карточки
  cardsContainer.prepend(cardElement);
  //добавила карточку в начало контейнера
  return cardElement;
}
//функция открытия попапов
function openAnyPopup(event) {
  let tag = event.target;
  if (tag.classList.contains('profile__button-edit')) {
    formFieldName.value = profileHeading.textContent;
    formFieldAbout.value = profileSubheading.textContent;
    popup.classList.add("popup_opened");
  } else if (tag.classList.contains('profile__button-add')) {
    popupCards.classList.add("popup_opened");
  }
}
  // присвоила полям формы значения заголовка и подзаголовка со страницы и поместила их в функцию, чтобы значения в поля загружались при каждом нажатии на кнопку.
// использую функцию openAnyPopup, чтобы добавить модификатор _opened по клику пользователя на кнопку редактирования профиля

//ф-ция закрытия попапов
function closeAnyPopup(event) {
  let closeBtn = event.target;
  if (closeBtn.classList.contains("popup__close")) {
    closeBtn.closest(".popup").classList.remove("popup_opened");
  }
}
// использую функцию closeAnyPoppup, чтобы модальное окно закрывалось при нажатии пользователя на крестик


//ф-ция при нажатии на кнопку "сохранить"
function formSubmitHandler(evt) {
  evt.preventDefault();
  let button = evt.target;
  //клик по кнопке submit на popup-profile и присвоение значений полей, закрытие попапа
  if (button.closest('.popup-profile')) {
    profileHeading.textContent = formFieldName.value;
    profileSubheading.textContent = formFieldAbout.value;
    //клик по нажатию на кнопку "создать" добавляет карточку на страницу и присваивает значение из полей (?)
  } else if (button.closest('.popup-cards')) {
    addCard(formFieldHeading.value, formFieldLink.value);
  }
  button.closest('.popup').classList.remove('popup_opened');
}
// отмена стандартной отправки формы на сервер, присвоение данных из инпутов странице и вызов функции для закрытия попапа

buttonAdd.addEventListener('click', openAnyPopup);
page.addEventListener("click", closeAnyPopup);
profileButtonEdit.addEventListener("click", openAnyPopup);
form.forEach(Element => {Element.addEventListener("submit", formSubmitHandler)});
// вешаю обработчик события на кнопку формы "сохранить", чтобы данные перезаписывались и попап закрывался. функция formSubmitHandler;
