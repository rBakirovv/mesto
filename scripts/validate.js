const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__field_type_error',
  errorClass: 'popup__error_visible'
};

const showInputError = (formElement, inputElement, errorMessage,settingsList) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(settingsList.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settingsList.errorClass);
};

const hideInputError = (formElement, inputElement,settingsList) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(settingsList.inputErrorClass);
  errorElement.classList.remove(settingsList.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement,settingsList) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage,settingsList);
  } else {
    hideInputError(formElement, inputElement,settingsList);
  }
};

const setEventListeners = (formElement,settingsList) => {
  const inputList = [...formElement.querySelectorAll(settingsList.inputSelector)];
  const buttonElement = formElement.querySelector(settingsList.submitButtonSelector);
  toggleButtonState(inputList, buttonElement,settingsList);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement,settingsList);
      toggleButtonState(inputList, buttonElement,settingsList);
    });
  });
}; 

const enableValidation = (settingsList) => {
  const formList = [...document.querySelectorAll(settingsList.formSelector)];
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
  setEventListeners(formElement, settingsList);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList,buttonElement,settingsList) => {
  if (hasInvalidInput(inputList)){
    buttonElement.classList.add(settingsList.inactiveButtonClass);
    buttonElement.disabled = true;
  } else{
    buttonElement.classList.remove(settingsList.inactiveButtonClass);
    buttonElement.disabled = false;
  };
};

enableValidation(validationSettings);