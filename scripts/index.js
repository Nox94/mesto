let ProfileButtonEdit = document.querySelector('.profile__button-edit');
// присвоила переменной с именем ProfileButtonEditNode значение кнопки редактирования,
// выбранное методом querySelector из разметки по классу .profile__button-edit
let Popup = document.querySelector('.popup');
let PopupClose = document.querySelector('.popup__close');
let Form = document.querySelector('.popup__form'); //нашла форму в разметке, она является значением переменной FormNode
let FormFieldName = document.querySelector('.popup__form-row_type_name');
let FormFieldAbout = document.querySelector('.popup__form-row_type_about');
let ProfileHeading = document.querySelector('.profile__heading');
let ProfileSubheading = document.querySelector('.profile__subheading');
let PopupSave = document.querySelector('.popup__save');

ProfileButtonEdit.addEventListener('click', handleProfileButtonEditClick);
// вешаю обработчик события на кнопку, чтобы потом добавить реакцию на событие. функция handleProfileButtonEditClick - аргумент? зачем?
// использую функцию handleProfileButtonEditClick, чтобы добавить модификатор _opened по клику пользователя на кнопку редактирования профиля
PopupClose.addEventListener('click', handlePopupCloseClick);
// вешаю обработчик события на кнопку "закрыть", чтобы потом добавить реакцию на событие. функция handlePopupCloseClick
Form.addEventListener('submit', FormSubmitHandler);
// вешаю обработчик события на кнопку формы "сохранить", чтобы данные перезаписывались и попап закрывался. функция FormNodeSubmitHandler
FormFieldName.value = ProfileHeading.textContent;
FormFieldAbout.value = ProfileSubheading.textContent;
// присвоила полям формы значения заголовка и подзаголовка со страницы

function handleProfileButtonEditClick() {
  Popup.classList.add('popup_opened');
}
// использую функцию handleProfileButtonEditClick, чтобы добавить модификатор _opened по клику пользователя на кнопку редактирования профиля

function handlePopupCloseClick() {
  Popup.classList.remove('popup_opened');
}
// использую функцию handlePopupCloseClick, чтобы модальное окно закрывалось при нажатии пользователя на крестик

function FormSubmitHandler(evt) {
  evt.preventDefault();
  ProfileHeading.textContent = FormFieldName.value;
  ProfileSubheading.textContent = FormFieldAbout.value;
  Popup.classList.remove('popup_opened');
}
// для того, чтобы работала кнопка "сохранить" и обновлялись данные из формы на странице