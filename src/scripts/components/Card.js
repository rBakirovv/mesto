export default class Card {

  constructor(data, { handleCardClick, handleDeleteIconClick, handleLikeClick, handleDislikeClick }, cardTemplate, user) {
    this._cardTemplate = cardTemplate
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._user = user;
    this._owner = data.owner._id;
    this._likes = data.likes;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDislikeClick = handleDislikeClick;
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

    const isLiked = this._likes.find(({ _id }) => _id === this._user);

    if (isLiked) {
      this._likeButton.classList.add('elements__like-button_active')
    };

    this._likeNumber.textContent = this._likes.length;

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

  _setEventListeners() {
    this._likeNumber = this._element.querySelector('.elements__like-number');

    this._likeButton.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('elements__like-button_active')) {
        this._handleDislikeClick(evt, this._likeNumber);
      } else {
        this._handleLikeClick(evt, this._likeNumber);
      };
    });

    this._trashButton.addEventListener('click', () => {
      this._handleDeleteIconClick();
    });

    this._photo.addEventListener('click', () => {
      this._handleCardClick();
    });
  };
}

