export default class Card {

  constructor(data, { handleCardClick, handleDeleteIconClick }, cardTemplate, user) {
    this._cardTemplate = cardTemplate
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._user = user;
    this._owner = data.owner._id;
    this._likes = data.likes;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
  };

  _getTemplate() {
    const cardElement = document.querySelector(this._cardTemplate)
      .content
      .querySelector('.elements__item')
      .cloneNode(true);
    return cardElement;
  };

  createCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.elements__like-button');
    this._trashButton = this._element.querySelector('.elements__trash-button');
    this._photo = this._element.querySelector('.elements__photo');

    this._setEventListeners();

    if (this._user != this._owner) {


      this._trashButton.style.display = 'none';
    };

    const likeNumber = this._element.querySelector('.elements__like-number');
    likeNumber.textContent = this._likes.length;

    const photoElemet = this._element.querySelector('.elements__photo');
    photoElemet.src = this._link;
    photoElemet.alt = this._name;
    this._element.querySelector('.elements__title').innerText = this._name;

    return this._element;
  };

  deleteCard() {
    this._element.remove();
    this._element = null
  };

  _handleLikeButton(evt) {
    evt.target.classList.toggle('elements__like-button_active');
  };

  _setEventListeners() {
    this._likeButton.addEventListener('click', (evt) => {
      this._handleLikeButton(evt);
    });

    this._trashButton.addEventListener('click', () => {
      this._handleDeleteIconClick();
    });

    this._photo.addEventListener('click', () => {
      this._handleCardClick();
    });
  };
}

