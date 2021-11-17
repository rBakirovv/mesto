const showInputError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (formElement, inputElement, { inputErrorClass, errorClass }) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, settingsList) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage,settingsList);
  } else {
    hideInputError(formElement, inputElement, settingsList);
  }
};

const setEventListeners = (formElement, settingsList) => {
  const inputList = [...formElement.querySelectorAll(settingsList.inputSelector)];
  const buttonElement = formElement.querySelector(settingsList.submitButtonSelector);
  toggleButtonState(inputList, buttonElement,settingsList);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, settingsList);
      toggleButtonState(inputList, buttonElement, settingsList);
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

const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass}) => {
  if (hasInvalidInput(inputList)){
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else{
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  };
};

enableValidation(validationSettings);