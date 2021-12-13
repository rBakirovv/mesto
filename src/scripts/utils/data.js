const popupEditButton = document.querySelector('.profile__edit-button');
const formEditElement = document.querySelector('.popup__edit-form');
const nameInput = document.querySelector('#popup__field-name');
const statusInput = document.querySelector('#popup__field-status');

const popupAddButton = document.querySelector('.profile__add-button');
const formAddElement = document.querySelector('.popup__add-form');

const cardTemplate = document.querySelector('.card-template');
const popupElementsImage = document.querySelector('.popup__img-full-size');
const popupElementsName = document.querySelector('.popup__img-subtitle');

const popups = document.querySelectorAll('.popup');

const ESCAPE = 27;

export const selectors = {
  name: '.profile__name',
  info: '.profile__status',
  cardSelector: '.card-template',
  popupImageSelector: '.popup-elements',
  popupProfileSelector: '.popup-edit',
  popupNewCardSelector: '.popup-add',
  containerSelector: '.elements',
};

export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__error_visible'
};

export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export {
  //popupEdit,
  popupEditButton,
  formEditElement,
  //nameElement,
  //statusElement,
  nameInput,
  statusInput,
  //popupAddMesto,
  popupAddButton,
 // cardList,
  cardTemplate,
  formAddElement,
  //placeInput,
  //linkImageInput,
  //popupElements,
  popupElementsImage,
  popupElementsName,
  //popupAddButtonSave,
  //popupEditButtonSave,
  popups,
  ESCAPE
}
