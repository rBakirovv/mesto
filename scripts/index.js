let popupProfile = document.querySelector('.popup');
let popupEditButton = document.querySelector('.profile__edit-button');
let popupClousedButton = document.querySelector('.popup__button-clouse');
let popupSaveButton = document.querySelector('.popup__button-save');
let formElement = document.querySelector('.popup__form');
let nameElement = document.querySelector('.profile__name');
let statusElement = document.querySelector('.profile__status');
let nameInput = document.querySelector('#popup__field-name');
let statusInput = document.querySelector('#popup__field-status');

function popupEditOpened(){
  popupProfile.classList.add('popup_opened');
  nameInput.value = nameElement.textContent;
  statusInput.value = statusElement.textContent;
}

function popupEditCloued(){
  popupProfile.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  statusElement.textContent = statusInput.value;
  popupEditCloued()
}

popupEditButton.addEventListener('click',popupEditOpened)
popupClousedButton.addEventListener('click',popupEditCloued);
formElement.addEventListener('submit', formSubmitHandler); 