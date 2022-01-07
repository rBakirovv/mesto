import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector('.popup__form');
    this._fields = this._popup.querySelectorAll('.popup__field');
    this._buttonSave = this._popup.querySelector('.popup__button-save');
    this._buttonSaveText = this._buttonSave.textContent;
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

  renderLoading(isLoading) {
    isLoading
      ? (this._buttonSave.textContent = 'Загрузка ...')
      : (this._buttonSave.textContent = this._buttonSaveText);
  }

  close() {
    super.close();
    this._form.reset();
  };
}
