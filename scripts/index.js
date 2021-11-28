import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { validationSettings } from './components/validationSettings.js';
import { initialCards } from  './components/initialCards.js';
import { openPopup, closePopup, openPopupEdit, handleFormSubmit, disableSaveButton } from './components/utils.js';
import {
  popupEditButton,
  formEditElement,
  popupAddMesto,
  popupAddButton,
  formAddElement,
  placeInput,
  linkImageInput,
  popupAddButtonSave,
  cardList
} from './components/data.js';

function renderCard() {
  initialCards.forEach((item) => {
    cardList.prepend(createCard(item));
  });
};

function createCard(item) {
  const card = new Card(item).createCard();
  return card
};

renderCard();

function addCard(evt) {
  evt.preventDefault();

  const newCard = {
    name: placeInput.value,
    link: linkImageInput.value
  };

  createCard(newCard);
  cardList.prepend(createCard(newCard));

  formAddElement.reset();

  closePopup(popupAddMesto);
  disableSaveButton(popupAddButtonSave);
};

const formEditValidation = new FormValidator(validationSettings, formEditElement).enableValidation();
const formAddValidation = new FormValidator(validationSettings, formAddElement).enableValidation();

popupEditButton.addEventListener('click', () => {
  openPopupEdit();
  const formEditReset = new FormValidator(validationSettings, formEditElement).resetValidation();
});
formEditElement.addEventListener('submit', handleFormSubmit);

popupAddButton.addEventListener('click', () => {
  openPopup(popupAddMesto);
  const formAddReset = new FormValidator(validationSettings, formAddElement).resetValidation();
});
formAddElement.addEventListener('submit',addCard);
