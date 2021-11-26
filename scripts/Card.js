import { cardTemplate, popupElements, popupElementsImage, popupElementsName } from './components/data.js';
import { openPopup } from './components/utils.js';

export class Card {
  constructor(data){
    this._name = data.name;
    this._link = data.link;
  };

  _getTemplate() {
    const cardElement = cardTemplate.cloneNode(true);
    return cardElement;
  };

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    const photoElemet = this._element.querySelector('.elements__photo');
    photoElemet.src = this._link;
    photoElemet.alt = this._name;
    this._element.querySelector('.elements__title').innerText = this._name;

    return this._element;
  };

  _handleLikeButton(evt) {
    evt.target.classList.toggle('elements__like-button_active');
  };

  _handleTrashButton(evt) {
    evt.target.closest('.elements__item').remove();
  };

  _openCard() {
    openPopup(popupElements);
    popupElementsImage.src = this._link;
    popupElementsImage.alt = this._name;
    popupElementsName.textContent = this._name;
  };

  _setEventListeners() {
    this._element.querySelector('.elements__like-button').addEventListener('click', (evt) => {
      this._handleLikeButton(evt);
    });

    this._element.querySelector('.elements__trash-button').addEventListener('click', (evt) => {
      this._handleTrashButton(evt);
    });

    this._element.querySelector('.elements__photo').addEventListener('click', () => {
      this._openCard();
    });
  };
};

