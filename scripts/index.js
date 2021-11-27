import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { validationSettings } from './components/validationSettings.js';
import { initialCards } from  './components/initialCards.js';
import { openPopup, closePopup, openPopupEdit, handleFormSubmit, handleClickOverlay } from './components/utils.js';
import {
  popupProfile,
  popupEditButton,
  popupEditCloseButton,
  formEditElement,
  popupAddMesto,
  popupAddButton,
  popupAddCloseButton,
  formAddElement,
  placeInput,
  linkImageInput,
  popupElements,
  popupElementsCloseButton,
  popupAddButtonSave,
  elements
} from './components/data.js';

function renderCard() {
  initialCards.forEach((item) => {
    elements.prepend(createCard(item));
  });
};

function createCard(item) {
  const card = new Card(item).createCard();
  return card
};

renderCard();

function disableSaveButton(button) {
  button.classList.add('popup__button-save_disabled');
  button.disabled = true;
};

function addCard(evt) {
  evt.preventDefault();

  const newCard = {
    name: placeInput.value,
    link: linkImageInput.value
  };

  createCard(newCard);
  elements.prepend(createCard(newCard));

  formAddElement.reset();

  closePopup(popupAddMesto);
  disableSaveButton(popupAddButtonSave);
};

const formEditValidation = new FormValidator(validationSettings, formEditElement).enableValidation();
const formAddValidation = new FormValidator(validationSettings, formAddElement).enableValidation();

popupEditButton.addEventListener('click',openPopupEdit);
popupEditCloseButton.addEventListener('click',() => closePopup(popupProfile));
formEditElement.addEventListener('submit', handleFormSubmit);

popupAddButton.addEventListener('click',() => openPopup(popupAddMesto));
popupAddCloseButton.addEventListener('click',() => closePopup(popupAddMesto));
formAddElement.addEventListener('submit',addCard);

popupElementsCloseButton.addEventListener('click',() => closePopup(popupElements));

popupProfile.addEventListener('click',handleClickOverlay);
popupAddMesto.addEventListener('click',handleClickOverlay);
popupElements.addEventListener('click',handleClickOverlay);
