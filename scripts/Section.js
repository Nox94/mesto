export default class Section {
  constructor({data, renderer}, containerSelector){
this._array = data,
this._renderer = renderer,
this._container = this._container = document.querySelector(containerSelector),
  }
  renderAllElements(){ //отвечает за отрисовку всех элементов
    this._array.forEach(item => {
      this._renderer(item); // вызываем renderer, передав item
    });
  }
  addItem(){ //принимает DOM-элемент и добавляет его в контейнер
    this._container.append(element);
  }
}