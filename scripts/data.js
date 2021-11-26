const popupProfile = document.querySelector('.popup-edit');
const popupEditButton = document.querySelector('.profile__edit-button');
const popupEditCloseButton = document.querySelector('.popup__edit-button-clouse');
const formEditElement = document.querySelector('.popup__edit-form');
const nameElement = document.querySelector('.profile__name');
const statusElement = document.querySelector('.profile__status');
const nameInput = document.querySelector('#popup__field-name');
const statusInput = document.querySelector('#popup__field-status');

const popupAddMesto = document.querySelector('.popup-add');
const popupAddButton = document.querySelector('.profile__add-button');
const popupAddCloseButton = document.querySelector('.popup__add-button-clouse');
const cardList = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content;
const formAddElement = document.querySelector('.popup__add-form');
const placeInput = document.querySelector('.popup__field-mesto');
const linkImageInput = document.querySelector('.popup__field-link-mesto');

const popupElements = document.querySelector('.popup-elements');
const popupElementsCloseButton = document.querySelector('.popup__elements-button-clouse');
const popupElementsImage = document.querySelector('.popup__img-full-size');
const popupElementsName = document.querySelector('.popup__img-subtitle');

const ESCAPE = 27;

export {
  popupProfile,
  popupEditButton,
  popupEditCloseButton,
  formEditElement,
  nameElement,
  statusElement,
  nameInput,
  statusInput,
  popupAddMesto,
  popupAddButton,
  popupAddCloseButton,
  cardList,
  cardTemplate,
  formAddElement,
  placeInput,
  linkImageInput,
  popupElements,
  popupElementsCloseButton,
  popupElementsImage,
  popupElementsName,
  ESCAPE,
}
