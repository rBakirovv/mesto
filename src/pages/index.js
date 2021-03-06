import './index.css';
import Api from '../scripts/components/Api.js';
import Card from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithSubmit from '../scripts/components/PopupWithSubmit.js';
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
  popupAvatarButton,
  formAvatarElement,
  selectors
} from '../scripts/utils/constants.js';

function apiErrorHandler(err) {
  (err) => {
    console.log(err);
  };
};

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-33',
  headers: {
    authorization: '32b3c185-edda-4421-8d96-b6aece916c09',
    'Content-Type': 'application/json'
  }
});

let user;

api.getAppInfo()
  .then(([data, info]) => {
    user = info._id
    userInfo.setUserInfo(info);
    newSection.render(data);
  })
  .catch(apiErrorHandler());

const renderCard = (data) => {
  const card = new Card(data,

    {
      handleCardClick: () => {
        popupWithImage.open(data)
      },

      handleDeleteIconClick: () => {
        popupConfirm.confirmHandler(() => {
          api.deleteCard(data)
            .then(() => {
              card.deleteCard();
            })
            .then(() => {
              popupConfirm.close()
            })
            .catch(apiErrorHandler());
        })
        popupConfirm.open();
      },

      handleLikeClick: (evt, likeCounter) => {
        api.setLike(data)
          .then((res) => {
            evt.target.classList.add('elements__like-button_active');
            likeCounter.textContent = res.likes.length;
          })
          .catch(apiErrorHandler());
      },

      handleDislikeClick: (evt, likeCounter) => {
        api.deleteLike(data)
          .then((res) => {
            evt.target.classList.remove('elements__like-button_active');
            likeCounter.textContent = res.likes.length;
          })
          .catch(apiErrorHandler());
      }
    }, selectors.cardSelector, user);
  return card.createCard();
};

const newSection = new Section({
  renderer: (item) => {
    const card = renderCard(item);
    newSection.addItem(card);
  }
}, selectors.containerSelector);

const formEditValidation = new FormValidator(validationSettings, formEditElement);
const formAddValidation = new FormValidator(validationSettings, formAddElement);
const formAvatarValidation = new FormValidator(validationSettings, formAvatarElement);

formEditValidation.enableValidation();
formAddValidation.enableValidation();
formAvatarValidation.enableValidation();

const userInfo = new UserInfo(selectors);

const popupWithImage = new PopupWithImage(selectors.popupImageSelector);
popupWithImage.setEventListeners();

const popupProfile = new PopupWithForm(selectors.popupProfileSelector, (data) => {
  popupProfile.renderLoading(true)
  api.setUserInfo(data)
    .then((info) => userInfo.setUserInfo(info))
    .then(() => {
      popupAvatar.close();
    })
    .catch(apiErrorHandler())
    .finally(() => {
      popupProfile.renderLoading(false)
    });
});
popupProfile.setEventListeners();

const popupAddCard = new PopupWithForm(selectors.popupNewCardSelector, (data) => {
  popupAddCard.renderLoading(true)
  api.createNewCard(data)
    .then((info) => {
      const card = renderCard(info);
      newSection.addItem(card);
    })
    .then(() => {
      popupAvatar.close();
    })
    .catch(apiErrorHandler())
    .finally(() => {
      popupAddCard.renderLoading(false)
    });
});
popupAddCard.setEventListeners();

const popupAvatar = new PopupWithForm(selectors.popupAvatarSelector, (data) => {
  popupAvatar.renderLoading(true)
  api.setUserAvatar(data)
    .then((info) => {
      userInfo.setUserInfo(info)
    })
    .then(() => {
      popupAvatar.close();
    })
    .catch(apiErrorHandler())
    .finally(() => {
      popupAvatar.renderLoading(false)
    });
});
popupAvatar.setEventListeners();

const popupConfirm = new PopupWithSubmit(selectors.popupConfirmSelector);
popupConfirm.setEventListeners();

popupEditButton.addEventListener('click', () => {
  const { name, about } = userInfo.getUserInfo();
  nameInput.value = name;
  statusInput.value = about;
  formEditValidation.enableSaveButton();
  formEditValidation.resetValidation();
  popupProfile.open();
});

popupAddButton.addEventListener('click', () => {
  formAddValidation.disableSaveButton();
  formAddValidation.resetValidation();
  popupAddCard.open();
});

popupAvatarButton.addEventListener('click', () => {
  formAvatarValidation.disableSaveButton();
  formAvatarValidation.resetValidation();
  popupAvatar.open();
});
