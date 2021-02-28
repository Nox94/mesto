export default class UserInfo {
//отвечает за управление отображением информации о пользователе на странице.
  constructor({userName, userInfo, userAvatar}){
this._userName = document.querySelector(userName),
this._userInfo = document.querySelector(userInfo),
this._userAvatar = document.querySelector(userAvatar)

  }
  getUserInfo(){
    return {
      name: this._userName.textContent,
      about: this._userInfo.textContent,
      avatar: this._userAvatar.src,
      _id: this._id
    }
  }

  setUserInfo({name, about, avatar, _id}){
    this._userName.textContent = name ? name : this._userName.textContent;
    this._userInfo.textContent = about ? about : this._userInfo.textContent;
    this._userAvatar.src = avatar ? avatar : this._userAvatar.src;
    this._id = _id;
  }
  returnUserId(){
    return this._id;
  }
}
