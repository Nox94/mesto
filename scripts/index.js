const ProfileButtonEditNode = document.querySelector('.profile__button-edit');
const PopupNode = document.querySelector('.popup');
const PopupClose = document.querySelector('.popup__close');



ProfileButtonEditNode.addEventListener('click', handleProfileButtonEditClick);
PopupClose.addEventListener('click', handlePopupCloseClick);

function handleProfileButtonEditClick() {
  PopupNode.classList.add('popup_opened');
}

function handlePopupCloseClick() {
  PopupClose.classList.remove('popup_opened');
}