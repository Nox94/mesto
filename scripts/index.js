let profileButtonEdit = document.querySelector(".profile__button-edit");
// присвоила переменной с именем ProfileButtonEditNode значение кнопки редактирования,
// выбранное методом querySelector из разметки по классу .profile__button-edit
let popup = document.querySelector(".popup");
let popupClose = document.querySelectorAll(".popup__close");
let form = document.querySelector(".popup__form");
let formFieldName = document.querySelector(".popup__form-row_type_name");
let formFieldAbout = document.querySelector(".popup__form-row_type_about");
let profileHeading = document.querySelector(".profile__heading");
let profileSubheading = document.querySelector(".profile__subheading");

//создала массив с данными карточек - заголовок и изображение
const initialCards = [
  {
      name: 'Домбай',
      link: './images/dombai.jpg'
  },
  {
      name: 'Эльбрус',
      link: './images/elbrus.jpg'
  },
  {
      name: 'Карачаевск',
      link: './images/karachaevsk.jpg'
  },
  {
      name: 'Пятигорск',
      link: './images/pyatigorsk.jpg'
  },
  {
      name: 'Сочи',
      link: './images/sochi.jpg'
  },
  {
      name: 'Архыз',
      link: './images/arkhyz.jpg'
  }
];

//функция клика по кнопке редактирования профиля
function handleProfileButtonEditClick() {
  formFieldName.value = profileHeading.textContent;
  formFieldAbout.value = profileSubheading.textContent;
  popup.classList.add("popup_opened");
  // присвоила полям формы значения заголовка и подзаголовка со страницы и поместила их в функцию, чтобы значения в поля загружались при каждом нажатии на кнопку.
}
// использую функцию handleProfileButtonEditClick, чтобы добавить модификатор _opened по клику пользователя на кнопку редактирования профиля
//ф-ция закрытия попапа
function handlePopupCloseClick() {
  popup.classList.remove("popup_opened");
}
// использую функцию handlePopupCloseClick, чтобы модальное окно закрывалось при нажатии пользователя на крестик

//ф-ция при нажатии на кнопку "сохранить"
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileHeading.textContent = formFieldName.value;
  profileSubheading.textContent = formFieldAbout.value;
  handlePopupCloseClick();
}
// отмена стандартной отправки формы на сервер, присвоение данных из инпутов странице и вызов функции для закрытия попапа

profileButtonEdit.addEventListener("click", handleProfileButtonEditClick);
// вешаю обработчик события на кнопку, чтобы потом добавить реакцию на событие. функция handleProfileButtonEditClick - аргумент? зачем?
// использую функцию handleProfileButtonEditClick, чтобы добавить модификатор _opened по клику пользователя на кнопку редактирования профиля
popupClose.addEventListener("click", handlePopupCloseClick);
// вешаю обработчик события на кнопку "закрыть", чтобы потом добавить реакцию на событие. функция handlePopupCloseClick
form.addEventListener("submit", formSubmitHandler);
// вешаю обработчик события на кнопку формы "сохранить", чтобы данные перезаписывались и попап закрывался. функция formNodeSubmitHandler
