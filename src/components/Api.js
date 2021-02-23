export default class Api {
    constructor(url, headers){
    this._baseUrl = url;
    this._headers = headers
    }

    getUserInfo(){
        return fetch(this._baseUrl+'/users/me', {
            method: "GET",
            headers: this._headers
        })
    }

    getTheCards(){
        return fetch(this._baseUrl+'/cards', {
            method: "GET",
            headers: this._headers
        })
    }
}