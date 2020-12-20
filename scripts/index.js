const profileButtonEdit = document.querySelector(".profile__button-edit");// присвоила переменной с именем ProfileButtonEditNode значение кнопки редактирования, выбранное методом querySelector из разметки по классу .profile__button-edit
const popupProfile = document.querySelector(".popup-profile");
const popup = document.querySelectorAll('.popup');
const popupClose = document.querySelectorAll(".popup__close");
const popupProfileSave = document.querySelector('#popupProfileSave'); //кнопка сохранения в форме ред-я профиля
const popupCardElemSave = document.querySelector('#popupCardElemSave'); //кнопка сохранения новой карточки на странице
const popupCards = document.querySelector(".popup-cards");
const forms = document.querySelectorAll(".popup__form");
const formFieldName = document.querySelector(".popup__form-row_type_name");
const formFieldAbout = document.querySelector(".popup__form-row_type_about");
const formFieldHeading = document.querySelector(".popup__form-row_type_heading");
const formFieldLink = document.querySelector(".popup__form-row_type_link");
const profileHeading = document.querySelector(".profile__heading");
const profileSubheading = document.querySelector(".profile__subheading");
const page = document.querySelector(".page");
const buttonAdd = document.querySelector(".profile__button-add");
const cardsContainer = document.querySelector(".elements");

const popupPicture = document.querySelector('.popup__picture');
const popupCapture = document.querySelector('.popup__capture');
const popupImage = document.querySelector('.popup-image');
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
  const some = item.name;
  const somethingElse = item.link;
  addCard(cardsContainer, createCard(some, somethingElse, cardTemplate));
});


// рендер массива для добавления первых шести карточек на страницу при загрузке
function renderList() {
cardsContainer.append(...initialCards);
  };

  // ф-ция создания карточки
function createCard(headingText, imageLink, template) {
  const cardElement = template.cloneNode(true);
  const cardImage =  cardElement.querySelector(".elements__card-img");
  const cardHeading = cardElement.querySelector(".elements__card-heading");
  const cardDeleteButton = cardElement.querySelector('.elements__remove-button');
  const cardLikeButton = cardElement.querySelector('.elements__like-button');
  cardHeading.textContent = headingText; //наполнение содержимым - название карточки
  cardImage.src = imageLink; //наполнение содержимым - src адрес карточки
  cardImage.alt = headingText; //наполнение содержимым - атрибут alt у изображения карточки по ее названию
   // лайк
  cardLikeButton.addEventListener('click', likeButtonHandler);

  // удаление карточки
  cardDeleteButton.addEventListener('click', removeButtonHandler);

  // открытие попапа картинки
  cardImage.addEventListener('click', openPopupPictureHandler);
  return cardElement;
}

//ф-ция добавления карточки
function addCard(container, element) {
  container.prepend(element); //добавила карточку в начало контейнера
}
// ф-ция добавления лайка
function likeButtonHandler(event) {
  // при нажатии на кнопку сайта она получает значение переменной eventTarget, так как является активным на данный момент объектом и на ней срабатывает слушатель события по клику и функция прибавления модификатора к классу
  event.target.classList.toggle('elements__like-button_clicked');
}

// ф-ция удаления карточки
function removeButtonHandler(event) {
  event.target.closest('.elements__card').remove();
}

// ф-ция открытия попапа картинки
function openPopupPictureHandler(event) { //попап карточки открывается по нажатию на картинку карточки
  popupPicture.src = event.target.src; // event.target является тем объектом, на который произвели клик, в данном случае это картинка карточки, она присваивается как значение картинки попапа
  popupPicture.alt = cardHeading; //добавляет атрибут alt изображению попапа картинки карточки по названию карточки
  const parentSearching = event.target.closest('.elements__card'); //находим в DOM родительский контейнер картинки — див со всеми элементами карточки и присваиваем его переменной
  popupCapture.textContent = parentSearching.querySelector('.elements__card-heading').textContent; //берем текстовое содержимое переменной, а которой хранится подпись к картинке попапа и присваиваем ей значение заголовка карточки через поиск в родительском элементе — родителе карточки с помощью метода querySelector
  popupImage.classList.add('popup_opened'); //делаем попап видимым после того, как он получил в себя все данные
}

// функция открытия попапов
function openPopup () {
  popup.classList.add('popup_opened');
}
openPopup(popup);
//функция-обработчик открытия попапов по событию
function handlerOpenAnyPopup(event) {
  const modal = event.target;
  openPopup(modal.closest('.popup'));
}

  // if (tag.classList.contains("profile__button-edit")) {
  //   formFieldName.value = profileHeading.textContent;
  //   formFieldAbout.value = profileSubheading.textContent;
  //   popup.classList.add("popup_opened");
  // } else if (tag.classList.contains("profile__button-add")) {
  //   popupCards.classList.add("popup_opened");
  // }

// присвоила полям формы значения заголовка и подзаголовка со страницы и поместила их в функцию, чтобы значения в поля загружались при каждом нажатии на кнопку.
// использую функцию openAnyPopup, чтобы добавить модификатор _opened по клику пользователя на кнопку редактирования профиля

//ф-ция-обработчик закрытия попапов по событию
function handlerCloseAnyPopup(event) {
  const closeBtn = event.target;
  closeAnyPopup(closeBtn.closest('.popup'))
}
//ф-ция закрытия попапов
function closeAnyPopup(popup_var) {
  popup_var.classList.remove("popup_opened");
}
// использую функцию closeAnyPoppup, чтобы модальное окно закрывалось при нажатии пользователя на крестик

//ф-ция при нажатии на кнопку "сохранить" у попапа редактирования профиля
function ProfileSubmitHandler(evt) {
  evt.preventDefault();
  const button = evt.target;
  //клик по кнопке submit на popup-profile и присвоение значений полей, закрытие попапа
  if (button.closest(".popup-profile")) {
    profileHeading.textContent = formFieldName.value;
    profileSubheading.textContent = formFieldAbout.value;
    //клик по нажатию на кнопку "создать" добавляет карточку на страницу и присваивает значение из полей
  } button.closest(".popup").classList.remove("popup_opened");
}

//ф-ция при нажатии на кнопку "создать" у попапа добавления картинки
function сardSaveHandler(evt) {
  evt.preventDefault();
  if (popupCardElemSave.closest('.popup-cards')) {

    addCard(cardsContainer, createCard(formFieldHeading.value, formFieldLink.value, cardTemplate));
    //клик по нажатию на кнопку "создать" добавляет карточку на страницу и присваивает значение из полей
  }; 
  closeAnyPopup(evt.target.closest(".popup"));
}console.log(popupCardElemSave);


// отмена стандартной отправки формы на сервер, присвоение данных из инпутов странице и вызов функции для закрытия попапа
// } else if (button.closest(".popup-cards")) {
  // addCard(formFieldHeading.value, formFieldLink.value);

// слушатели событий
buttonAdd.addEventListener("click", openAnyPopup);

popupClose.forEach(item => item.addEventListener('click', handlerCloseAnyPopup));
profileButtonEdit.addEventListener("click", openAnyPopup);
popupProfileSave.addEventListener('submit', ProfileSubmitHandler);
popupCardElemSave.addEventListener('submit', сardSaveHandler);


