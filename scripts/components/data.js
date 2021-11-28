const popupEdit = document.querySelector('.popup-edit');
const popupEditButton = document.querySelector('.profile__edit-button');
const formEditElement = document.querySelector('.popup__edit-form');
const nameElement = document.querySelector('.profile__name');
const statusElement = document.querySelector('.profile__status');
const nameInput = document.querySelector('#popup__field-name');
const statusInput = document.querySelector('#popup__field-status');
const popupEditButtonSave = popupEdit.querySelector('.popup__button-save');

const popupAddMesto = document.querySelector('.popup-add');
const popupAddButton = document.querySelector('.profile__add-button');
const formAddElement = document.querySelector('.popup__add-form');
const placeInput = document.querySelector('.popup__field-mesto');
const linkImageInput = document.querySelector('.popup__field-link-mesto');
const popupAddButtonSave = popupAddMesto.querySelector('.popup__button-save');

const cardList = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content;
const popupElements = document.querySelector('.popup-elements');
const popupElementsImage = document.querySelector('.popup__img-full-size');
const popupElementsName = document.querySelector('.popup__img-subtitle');

const popups = document.querySelectorAll('.popup');

const ESCAPE = 27;

export {
  popupEdit,
  popupEditButton,
  formEditElement,
  nameElement,
  statusElement,
  nameInput,
  statusInput,
  popupAddMesto,
  popupAddButton,
  cardList,
  cardTemplate,
  formAddElement,
  placeInput,
  linkImageInput,
  popupElements,
  popupElementsImage,
  popupElementsName,
  popupAddButtonSave,
  popupEditButtonSave,
  popups,
  ESCAPE
}
