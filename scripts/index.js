import { Card } from './Card.js';
import { initialCards } from  './initialCards.js';
import { openPopup, closePopup, openPopupEdit, handleFormSubmit, handleClickOverlay } from './utils.js';
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
} from './data.js';

initialCards.forEach((item) => {
  renderCard(item);
});

function renderCard(item) {
  const card = new Card(item).createCard();
  document.querySelector('.elements').prepend(card);
}

function addCard(evt) {
  evt.preventDefault();

  const newCard = {
    name: placeInput.value,
    link: linkImageInput.value
  };

  renderCard(newCard);

  formAddElement.reset();

  closePopup(popupAddMesto);
};

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
