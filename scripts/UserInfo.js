export default class UserInfo {
//отвечает за управление отображением информации о пользователе на странице.
  constructor({userName, userInfo}){
this._userName = document.querySelector(userName).textContent,
this._userInfo = document.querySelector(userInfo).textContent
  }
  getUserInfo(){
    return {name: this._userName, info: this._userInfo}
  }
  setUserInfo(name, info){
    this._userName = name,
    this._userInfo = info
  }
}