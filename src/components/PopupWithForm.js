import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popup, handleSubmitting) {
    super(popup);
    this._form = this._popup.querySelector(".popup__form");
    this._formFields = this._popup.querySelectorAll(".popup__form-row");
    this._handleSubmitting = handleSubmitting;
  }
  getInputValues() {  //получение значений инпутов
    this._inputValues = {}; //значение текущих полей = объекту
    this._formFields.forEach((input) => ( //значение ключа имени каждого инпута = его значению  
      this._inputValues[input.name] = input.value
    )
    );
    return this._inputValues; //возврат значений инпутов
  }

  setEventListeners() {
    this._popup.addEventListener("submit", () => // слушатель по сабмиту на текущий попап
      this._handleSubmitting(this.getInputValues())//выполняется переданная ф-ция обработчик
    );//аргументом ей передается метод получения полей инпутов (?) 
    super.setEventListeners(); //родительский метод позволяет закрывать попап по сабмиту
  }

  setInputValues(data) { //установка значений инпутов
    this._formFields.forEach((input) => {
      input.value = data[input.name];
      // console.log(data);
    });
  }

  formReset() {
    this._form.reset()
  }

  close() {
    super.close();
    this._form.reset();
  }
}
