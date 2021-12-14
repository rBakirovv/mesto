export default class UserInfo {
  constructor(data) {
    this._name = document.querySelector(data.name);
    this._info = document.querySelector(data.info);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      info: this._info.textContent
    }

  }

  setUserInfo(nameInput, statusInput) {
    this._name.textContent = nameInput.value;
    this._info.textContent = statusInput.value;
  }
}
