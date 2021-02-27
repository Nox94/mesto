export default class Section {
  constructor({renderer}, containerSelector) {
    // this._array = data, undefined 
    this._renderer = renderer,
    this._container = document.querySelector(containerSelector)
  }
  renderAllElements() {
    //отвечает за отрисовку всех элементов
    this._array.forEach(item => {
    this._renderer(item); // вызываем renderer, передав item
    });
  }
  addItem(element) {
    //принимает DOM-элемент и добавляет его в контейнер
    this._container.prepend(element);
  }
  setCardsArray(cardsArray){
    this._array = cardsArray
  }
}