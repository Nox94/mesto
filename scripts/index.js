const ProfileButtonEditNode = document.querySelector('.profile__button-edit');
const PopupNode = document.querySelector('.popup');
const PopupCloseNode = document.querySelector('.popup__close');



ProfileButtonEditNode.addEventListener('click', handleProfileButtonEditClick);
PopupCloseNode.addEventListener('click', handlePopupCloseClick);

function handleProfileButtonEditClick() {
  PopupNode.classList.add('popup_opened');
}

function handlePopupCloseClick() {
  PopupNode.classList.remove('popup_opened');
}