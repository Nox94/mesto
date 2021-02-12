import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupPicture = this._popupSelector.querySelector(".popup__picture");
    this._popupCapture = this._popupSelector.querySelector(".popup__capture");
  }
  open(data, modal) {
    this._popupPicture.src = data.src;
    this._popupPicture.alt = data.name;
    this._popupCapture.textContent = data.name;
    super.open(modal);
    super.setEventListeners();
  }
}

// // обработчик ф-ции открытия попапа картинки
// function handlePopupPicOpening(data) {
//   popupPicture.src = data.src;
//   popupPicture.alt = data.name;
//   popupCapture.textContent = data.name;
//   popupWithImage.open(popupImage);
// }

// function openPopupPictureHandler(event) {
//   // 1) попап карточки открывается по нажатию на картинку карточки
//   popupPicture.src = event.target.src;
//   // 2) event.target является тем объектом, на который произвели клик, в данном случае это картинка карточки, она присваивается как значение картинки попапа
//   popupPicture.alt = event.target.alt;
//   // 3) добавляет атрибут alt изображению попапа картинки карточки по названию карточки
//   const parentSearching = event.target.closest(".elements__card");
//   // 4) находим в DOM родительский контейнер картинки — див со всеми элементами карточки и присваиваем его переменной
//   popupCapture.textContent = parentSearching.querySelector(".elements__card-heading").textContent;
//   // 5) берем текстовое содержимое переменной, а которой хранится подпись к картинке попапа и присваиваем ей значение заголовка карточки через поиск в родительском элементе — родителе карточки с помощью метода querySelector
//   openPopup(popupImage);
//   // 6) делаем попап видимым после того, как он получил в себя все данные
// }
 // //класс PopupWithImage:
  // наследуется от Popup, вызывает его конструктор, в который передает нужный параметр - смотреть в сторону super.
  // используя логику полиморфизма надо перезаписать метод open, сначала сделать в нем то что описано в ТЗ, а потом вызвать метод родительского класса чтобы открыть попап

  // Этот класс должен перезаписывать родительский метод open.
  // В методе open класса PopupWithImage нужно вставлять в попап картинку и атрибут src изображения и подпись к картинке.