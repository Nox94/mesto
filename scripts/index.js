const profileButtonEdit = document.querySelector(".profile__button-edit");// присвоила переменной с именем ProfileButtonEditNode значение кнопки редактирования, выбранное методом querySelector из разметки по классу .profile__button-edit
const popup = document.querySelector(".popup-profile");
const popupClose = document.querySelector(".popup__close");
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
const cardHeading = document.querySelector(".elements__card-heading");
const cardImage = document.querySelector(".elements__card-img");
const cardLikeButton = document.querySelector('.elements__like-button');
const popupPicture = document.querySelector('.popup__picture');
const popupCapture = document.querySelector('.popup__capture');
const popupImage = document.querySelector('.popup-image');

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
  addCard(some, somethingElse);
});


// рендер массива для добавления первых шести карточек на страницу при загрузке
function renderList() {
cardsContainer.append(...initialCards);
  };


//ф-ция создания и добавления карточки
function addCard(cardHeading, cardImage) {
  const cardTemplate = document.querySelector("#card-template").content; //получила шаблон карточки себе в переменную вместе с содержимым
  const cardElement = cardTemplate.cloneNode(true);
  // склонировала все содержимое шаблона карточки и сохранила в другую переменную чтобы создавать новые карточки
  cardElement.querySelector(".elements__card-heading").textContent = cardHeading; //наполнение содержимым - название карточки
  cardElement.querySelector(".elements__card-img").src = cardImage; //наполнение содержимым - src адрес карточки
  cardElement.querySelector(".elements__card-img").alt = cardHeading; //наполнение содержимым - атрибут alt у изображения карточки по ее названию
   // лайк
  cardElement.querySelector('.elements__like-button').addEventListener('click', likeButtonHandler);

  // удаление карточки
  cardElement.querySelector('.elements__remove-button').addEventListener('click', removeButtonHandler);

  // открытие попапа картинки
  cardElement.querySelector('.elements__card-img').addEventListener('click', openPopupPictureHandler);

  cardsContainer.prepend(cardElement); //добавила карточку в начало контейнера
  return cardElement;
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



// отмена стандартной отправки формы на сервер, присвоение данных из инпутов странице и вызов функции для закрытия попапа
// } else if (button.closest(".popup-cards")) {
  // addCard(formFieldHeading.value, formFieldLink.value);

// слушатели событий
buttonAdd.addEventListener("click", openAnyPopup);
page.addEventListener("click", closeAnyPopup);
profileButtonEdit.addEventListener("click", openAnyPopup);
popupProfileSave.addEventListener('click', ProfileSubmitHandler);
// popupCardElemSave.addEventListener('click', fu)


