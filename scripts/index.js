const ProfileButtonEditNode = document.querySelector('.profile__button-edit');
const PopupNode = document.querySelector('.popup');
const PopupCloseNode = document.querySelector('.popup__close');
const FormNode = document.querySelector('.popup__form');
const FormFieldNameNode = document.querySelector('.popup__form-row_type_name');
const FormFieldAboutNode = document.querySelector('.popup__form-row_type_about');

ProfileButtonEditNode.addEventListener('click', handleProfileButtonEditClick);
PopupCloseNode.addEventListener('click', handlePopupCloseClick);
FormNode.addEventListener('submit', FormNodeSubmitHandler);


function handleProfileButtonEditClick() {
  PopupNode.classList.add('popup_opened');
}

function handlePopupCloseClick() {
  PopupNode.classList.remove('popup_opened');
}

function FormNodeSubmitHandler(evt) {
  evt.preventDefault();
}

console.log(FormFieldNameNode.value);
console.log(FormFieldAboutNode.value);



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