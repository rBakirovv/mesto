const popupProfile = document.querySelector('.popup-edit');
const popupEditButton = document.querySelector('.profile__edit-button');
const popupEditClousedButton = document.querySelector('.popup__edit-button-clouse');
const formEditElement = document.querySelector('.popup__edit-form'); 
const nameElement = document.querySelector('.profile__name'); 
const statusElement = document.querySelector('.profile__status'); 
const nameInput = document.querySelector('#popup__field-name'); 
const statusInput = document.querySelector('#popup__field-status');

const popupAddMesto = document.querySelector('.popup-add');
const popupAddButton = document.querySelector('.profile__add-button');
const popupAddClousedButton = document.querySelector('.popup__add-button-clouse');
const cardList = document.querySelector('.elements');
const cardTemplate = document.querySelector('.card-template').content;
const formAddElement = document.querySelector('.popup__add-form');
const placeInput = document.querySelector('.popup__field-mesto');
const linkImageInput = document.querySelector('.popup__field-link-mesto');

const popupElements = document.querySelector('.popup-elements');
const popupElementsCloseButton = document.querySelector('.popup__elements-button-clouse');
const popupElementsImage = document.querySelector('.popup__img-full-size');
const popupElementsName = document.querySelector('.popup__img-subtitle');

const escapeButton = 27; 

const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__error_visible'
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown',handleEscButton);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown',handleEscButton);
};

function handleEscButton(evt){
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.keyCode === escapeButton){
    closePopup(popupOpened);
  };
};

function handleClickOverlay(evt){
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup_opened')){
    closePopup(popupOpened);
  };
};

function openPopupEdit(){
  openPopup(popupProfile);
  nameInput.value = nameElement.textContent;
  statusInput.value = statusElement.textContent;
};

function handleFormSubmit (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  statusElement.textContent = statusInput.value;
  closePopup(popupProfile);
};

initialCards.forEach(element => {
  renderCard(element);
});

function createCard(item) {
  const cardElement = cardTemplate.cloneNode(true);
  const photoElemet = cardElement.querySelector('.elements__photo');
  photoElemet.src = item.link;
  photoElemet.alt = item.name;
  cardElement.querySelector('.elements__title').innerText = item.name;

  function handleLikeButton(evt){
    evt.target.classList.toggle('elements__like-button_active');
  };

  function handleLikeButton(evt){
    evt.target.classList.toggle('elements__like-button_active');
  };

  cardElement.querySelector('.elements__like-button').addEventListener('click', handleLikeButton);
 
  cardElement.querySelector('.elements__trash-button').addEventListener('click', function (evt){
    evt.target.closest('.elements__item').remove();
  });

  cardElement.querySelector('.elements__photo').addEventListener('click', function (evt) {
    openPopup(popupElements);
    popupElementsImage.src = item.link;
    popupElementsImage.alt = item.name;
    popupElementsName.textContent = item.name;
  });
  return cardElement;
};

function renderCard(item) {
  const cardElement = createCard(item);
  cardList.prepend(cardElement);
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
popupEditClousedButton.addEventListener('click',() => closePopup(popupProfile));
formEditElement.addEventListener('submit', handleFormSubmit);

popupAddButton.addEventListener('click',() => openPopup(popupAddMesto));
popupAddClousedButton.addEventListener('click',() => closePopup(popupAddMesto));
formAddElement.addEventListener('submit',addCard);

popupElementsCloseButton.addEventListener('click',() => closePopup(popupElements));

document.addEventListener('mousedown',handleClickOverlay);