import './index.css';
import Api from '../scripts/components/Api.js';
import Card  from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import FormValidator from '../scripts/components/FormValidator.js';
import {
  nameInput,
  statusInput,
  popupEditButton,
  popupAddButton,
  formEditElement,
  formAddElement,
  validationSettings,
  selectors
} from '../scripts/utils/constants.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-33',
  headers: {
    authorization: '32b3c185-edda-4421-8d96-b6aece916c09',
    'Content-Type': 'application/json'
  }
}); 

const defaultCards = api.getInitialCards()
.then((data) => {
  newSection.render(data);
});

api.getUserInfo();

const renderCard = (data) => {
  const card = new Card(data, () => {
  popupWithImage.open(data);
 }, selectors.cardSelector).createCard();
 return card
};

const newSection = new Section({renderer: (item) =>{
  const card = renderCard(item);
  newSection.addItem(card);
}}, selectors.containerSelector);

const popupWithImage = new PopupWithImage(selectors.popupImageSelector);
popupWithImage.setEventListeners();

const formEditValidation = new FormValidator(validationSettings, formEditElement);
const formAddValidation = new FormValidator(validationSettings, formAddElement);

formEditValidation.enableValidation()
formAddValidation.enableValidation()

const userInfo = new UserInfo(selectors);

const popupProfile = new PopupWithForm(selectors.popupProfileSelector, (data) => {
  userInfo.setUserInfo(data);
});
popupProfile.setEventListeners();

const popupAddCard = new PopupWithForm(selectors.popupNewCardSelector, (data) => {
  const card = renderCard(data);
  newSection.addItem(card);
});
popupAddCard.setEventListeners();

popupEditButton.addEventListener('click', () => {
  const { name, info } = userInfo.getUserInfo();
  nameInput.value = name;
  statusInput.value = info;
  formEditValidation.enableSaveButton();
  formEditValidation.resetValidation();
  popupProfile.open();
});

popupAddButton.addEventListener('click', () => {
  formAddValidation.disableSaveButton();
  formAddValidation.resetValidation();
  popupAddCard.open();
});
