import { ESCAPE, popupEdit, nameElement, nameInput, statusInput, statusElement, popupEditButtonSave, popups } from './data.js';

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown',handleEscButton);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown',handleEscButton);
};

function handleEscButton(evt){
  if (evt.keyCode === ESCAPE){
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

function handleClickOverlay(evt){
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup_opened')){
    closePopup(popupOpened);
  };
};

function disableSaveButton(button) {
  button.classList.add('popup__button-save_disabled');
  button.disabled = true;
};

function enableSaveButton(button){
  button.classList.remove('popup__button-save_disabled');
  button.disabled = false;
}

function openPopupEdit(){
  openPopup(popupEdit);
  enableSaveButton(popupEditButtonSave);
  nameInput.value = nameElement.textContent;
  statusInput.value = statusElement.textContent;
};

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  statusElement.textContent = statusInput.value;
  closePopup(popupEdit);
};

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup)
      }
      if (evt.target.classList.contains('popup__button-clouse')) {
        closePopup(popup)
      }
  })
})

export { openPopup, closePopup, handleClickOverlay, openPopupEdit, handleFormSubmit, disableSaveButton };
