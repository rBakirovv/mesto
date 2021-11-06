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
const mestoInput = document.querySelector('#popup__field-mesto');
const linkImageInput = document.querySelector('#popup__field-link-mesto');

const popupElements = document.querySelector('.popup-elements');
const popupElementsClouseButton = document.querySelector('.popup__elements-button-clouse');
const popupElementsImage = document.querySelector('.popup__img-full-size');
const popupElementsName = document.querySelector('.popup__img-subtitle');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopupEdit(){
  openPopup(popupProfile);
  nameInput.value = nameElement.textContent;
  statusInput.value = statusElement.textContent;
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  statusElement.textContent = statusInput.value;
  closePopup(popupProfile);
}

initialCards.forEach(element =>{
  renderCard(element);
});

function createCard(item) {
  const cardElement = cardTemplate.cloneNode(true);
  const photoElemet = cardElement.querySelector('.elements__photo');
  photoElemet.src = item.link;
  photoElemet.alt = item.name;
  cardElement.querySelector('.elements__title').innerText = item.name;

  cardElement.querySelector('.elements__like-button').addEventListener('click', function (evt){
    evt.target.classList.toggle('elements__like-button_active');
  });

  cardElement.querySelector('.elements__trash-button').addEventListener('click', function (evt){
    evt.target.closest('.elements__item').remove();
  });

  cardElement.querySelector('.elements__photo').addEventListener('click', function (evt) {
    popupElements.classList.add('popup_opened');
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
    name: mestoInput.value,
    link: linkImageInput.value
  };

  renderCard(newCard);
  
  mestoInput.value = '';
  linkImageInput.value = '';

  closePopup(popupAddMesto);
};

popupEditButton.addEventListener('click',openPopupEdit);
popupEditClousedButton.addEventListener('click',() => closePopup(popupProfile));
formEditElement.addEventListener('submit', formSubmitHandler);

popupAddButton.addEventListener('click',() => openPopup(popupAddMesto));
popupAddClousedButton.addEventListener('click',() => closePopup(popupAddMesto));
formAddElement.addEventListener('submit',addCard);

popupElementsClouseButton.addEventListener('click',() => closePopup(popupElements));