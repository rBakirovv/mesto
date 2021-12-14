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

  setUserInfo(data) {
    this._name.textContent = data.author;
    this._info.textContent = data.status;
  }
}
