import Popup from "./Popup";

export default class PopupWithForm extends Popup{
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.popup__form');
    this._fields = this._popup.querySelectorAll('.popup__field');
  };

  _getInputValues() {
    this._formValues = {};
    this._fields.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler(this._getInputValues());
      this.close();
    });
  };

  close() {
    super.close();
    this._form.reset();
  };
}
