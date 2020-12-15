//создала массив с данными карточек - заголовок и изображение (и зачем???)
const initialCards = [
  {
    name: "Домбай",
    link: "./images/dombai.jpg",
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
// рендер массива (???)
function renderElements() {
  const cardsArray = initialCards.map(addCard);
  console.log(cardsArray);
  cardsContainer.prepend(cardElement);
}