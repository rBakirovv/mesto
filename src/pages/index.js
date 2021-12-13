import './index.css';
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
  initialCards,
  selectors
} from '../scripts/utils/data.js';

const renderCard = (data) => {
  const card = new Card(data, () => {
  popupWithImage.open(data);
 }, selectors.cardSelector).createCard();
 return card
};

const newSection = new Section({items: initialCards, renderer: (item) =>{
  const card = renderCard(item);
  newSection.addItem(card);
}}, selectors.containerSelector);

newSection.render();

const popupWithImage = new PopupWithImage(selectors.popupImageSelector);
popupWithImage.setEventListeners();

const formEditValidation = new FormValidator(validationSettings, formEditElement);
const formAddValidation = new FormValidator(validationSettings, formAddElement);

formEditValidation.enableValidation()
formAddValidation.enableValidation()

const userInfo = new UserInfo(selectors.name, selectors.info);

const popupProfile = new PopupWithForm(selectors.popupProfileSelector, ()=>{
  userInfo.setUserInfo(nameInput, statusInput);
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

