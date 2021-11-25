import { ESCAPE, popupProfile, nameElement, nameInput, statusInput, statusElement } from "./data.js";

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown',handleEscButton);
};

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown',handleEscButton);
};

function handleEscButton(evt){
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.keyCode === ESCAPE){
    closePopup(popupOpened);
  };
};

export function handleClickOverlay(evt){
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup_opened')){
    closePopup(popupOpened);
  };
};

export function openPopupEdit(){
  openPopup(popupProfile);
  nameInput.value = nameElement.textContent;
  statusInput.value = statusElement.textContent;
};

export function handleFormSubmit (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  statusElement.textContent = statusInput.value;
  closePopup(popupProfile);
};
