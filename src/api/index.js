import Realty from "../models/realty";

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};

export default class Api {

  constructor(endPoint) {
    this._endPoint = endPoint;
  }

  getCards() {
    return this._load({url: `items`})
      .then((response) => response.json())
      .then(Realty.parseRealties);
  }

  _load({url, method = `GET`, body = null}) {
    return fetch(`${this._endPoint}/${url}`, {method, body})
      .then(checkStatus)
      .catch((err) => {
        throw err;
      });
  }
}
