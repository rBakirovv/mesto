import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = document.querySelector('.popup__img-full-size');
    this._subtitle = document.querySelector('.popup__img-subtitle');
  };

  open(data) {
    super.open()
    this._image.src = data.link;
    this._image.alt = data.name;
    this._subtitle.textContent = data.name;
  };
}
