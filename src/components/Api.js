const handleOriginalResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export default class Api {
  constructor(url, headers) {
    this._baseUrl = url;
    this._headers = headers;
  }

  getUserInfo() {
    return fetch(this._baseUrl + "/users/me", {
      method: "GET",
      headers: this._headers,
    }).then(handleOriginalResponse);
  }

  saveUserInfo(data) {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-20/users/me", {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(handleOriginalResponse);
  }

  addLike(id) {
    return fetch(
      "https://mesto.nomoreparties.co/v1/cohort-20/cards/likes/" + `${id}`,
      {
        method: "PUT",
        headers: this._headers,
      }
    ).then(handleOriginalResponse);
  }

  removeLike(id) {
    return fetch(
      "https://mesto.nomoreparties.co/v1/cohort-20/cards/likes/" + `${id}`,
      {
        method: "DELETE",
        headers: this._headers,
      }
    ).then(handleOriginalResponse);
  }

  getTheCards() {
    return fetch(this._baseUrl + "/cards", {
      method: "GET",
      headers: this._headers,
    }).then(handleOriginalResponse);
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
    ).then(handleOriginalResponse);
  }

  createNewCard(data) {
    return fetch(this._baseUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(handleOriginalResponse);
  }

  removeCard(id) {
    return fetch(this._baseUrl + "/cards" + "/" + `${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(handleOriginalResponse);
  }
}
