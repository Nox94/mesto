export default class UserInfo {
//отвечает за управление отображением информации о пользователе на странице.
  constructor({userName, userInfo}){
this._userName = document.querySelector(userName),
this._userInfo = document.querySelector(userInfo)
  }
  getUserInfo(){
    //название ключей объекта берутся из аттрибута name
    // у инпутов формы в html
    return {Name: this._userName.textContent, About: this._userInfo.textContent}
  }
  // setUserInfo({Name, About}){
  //   this._userName.textContent = Name,
  //   this._userInfo.textContent = About
  // }

  setUserInfo(data){
    this._userName.textContent = data.Name;
    this._userInfo.textContent = data.About
  }
}


