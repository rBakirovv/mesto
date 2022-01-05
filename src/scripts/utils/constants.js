const popupEditButton = document.querySelector('.profile__edit-button');
const formEditElement = document.querySelector('.popup__edit-form');
const nameInput = document.querySelector('#popup__field-name');
const statusInput = document.querySelector('#popup__field-status');

const popupAddButton = document.querySelector('.profile__add-button');
const formAddElement = document.querySelector('.popup__add-form');

const cardTemplate = document.querySelector('.card-template');
const popupElementsImage = document.querySelector('.popup__img-full-size');
const popupElementsName = document.querySelector('.popup__img-subtitle');

export const selectors = {
  name: '.profile__name',
  about: '.profile__status',
  cardSelector: '.card-template',
  popupImageSelector: '.popup-elements',
  popupProfileSelector: '.popup-edit',
  popupNewCardSelector: '.popup-add',
  popupConfirmDelete: '.popup-confirm',
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

export {
  popupEditButton,
  formEditElement,
  nameInput,
  statusInput,
  popupAddButton,
  cardTemplate,
  formAddElement,
  popupElementsImage,
  popupElementsName,
}
