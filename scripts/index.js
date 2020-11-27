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
Form.addEventListener('submit', FormNodeSubmitHandler);
// вешаю обработчик события на кнопку формы "сохранить", чтобы данные перезаписывались и попап закрывался. функция FormNodeSubmitHandler


function handleProfileButtonEditClick() {
  Popup.classList.add('popup_opened');
}
// использую функцию handleProfileButtonEditClick, чтобы добавить модификатор _opened по клику пользователя на кнопку редактирования профиля
function handlePopupCloseClick() {
  Popup.classList.remove('popup_opened');
}
// использую функцию handlePopupCloseClick, чтобы модальное окно закрывалось при нажатии пользователя на крестик
function FormNodeSubmitHandler(evt) {
  evt.preventDefault();
}
// понадобится для того, чтобы работала кнопка "сохранить"

FormFieldName.value = ProfileHeading.textContent;
FormFieldAbout.value = ProfileSubheading.textContent;
// присвоила полям формы значения заголовка и подзаголовка со страницы


// Находим форму в DOM
// let formElement = // Воспользуйтесь методом querySelector() ЕСТЬ

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
// function formSubmitHandler (evt) {  ЕСТЬ
    // evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    // let nameInput = // Воспользуйтесь инструментом .querySelector() ЕСТЬ
    // let jobInput = // Воспользуйтесь инструментом .querySelector()  ЕСТЬ

    // Получите значение полей из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', formSubmitHandler);