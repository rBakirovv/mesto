let popupProfile = document.querySelector('.popup');
let popupEditButton = document.querySelector('.profile__edit-button');
let popupClousedButton = document.querySelector('.popup__button-clouse');
let popupSaveButton = document.querySelector('.popup__button-save');
let formElement = document.querySelector('.popup__form');
let nameElement = document.querySelector('.profile__name');
let statusElement = document.querySelector('.profile__status');
let nameInput = document.querySelector('#popup__field-name');
let statusInput = document.querySelector('#popup__field-status');

popupEditButton.addEventListener('click', function(){
  popupProfile.classList.add('popup_opened');
  nameInput.value = nameElement.textContent;
  statusInput.value = statusElement.textContent;
});

function popupEditCloued(){
  popupProfile.classList.remove('popup_opened');
}
popupClousedButton.addEventListener('click',popupEditCloued);

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  statusElement.textContent = statusInput.value;
  popupEditCloued()
}

popupSaveButton.addEventListener('click',formSubmitHandler);
formElement.addEventListener('submit', formSubmitHandler); 