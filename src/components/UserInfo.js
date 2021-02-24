export default class UserInfo {
//отвечает за управление отображением информации о пользователе на странице.
  constructor({userName, userInfo, userAvatar}){
this._userName = document.querySelector(userName),
this._userInfo = document.querySelector(userInfo),
this._userAvatar = document.querySelector(userAvatar)

  }
  getUserInfo(){
    //название ключей объекта берутся из атрибута name у инпутов формы в html
    console.log({
      name: this._userName.textContent, 
      about: this._userInfo.textContent, 
      avatar: this._userAvatar.src, 
      _id: this._id}
  )
  
    return {
      name: this._userName.textContent, 
      about: this._userInfo.textContent, 
      avatar: this._userAvatar.src, 
      _id: this._id}
  }

  setUserInfo(data){
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.about;
    this._userAvatar.src = data.avatar;
    this._id = data._id;
  }
}