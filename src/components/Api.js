// import { data } from "autoprefixer";

export default class Api {
  constructor(url, headers) {
    this._baseUrl = url;
    this._headers = headers;
  }

  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
      method: "GET",
      headers: this._headers,
    });
  }

  saveUserInfo(data) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-20/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    });
  }

  addLike(id){
    return fetch(this._baseUrl + "/cards" + '/likes/' + `${id}`, {
      method: "PUT",
      headers: this._headers,
    })
    .then((res) => res.json());
  }

  removeLike(id){
    return fetch(this._baseUrl + "/cards" + '/likes/' + `${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then((res) => res.json());
  }

  getTheCards() {
    return fetch(this._baseUrl + "/cards", {
      method: "GET",
      headers: this._headers,
    });
  }

  changeUserAvatar(data) {
    return fetch(
      "https://mesto.nomoreparties.co/v1/cohort-20/users/me/avatar",
      {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.avatar,
        }),
      }
    );
  }

  createNewCard(data) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    })
    .then((res) => res.json());
  }

  removeCard(id){
    return fetch(this._baseUrl + "/cards" + '/' + `${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then((res) => {
      console.log(res);
  })}
}
