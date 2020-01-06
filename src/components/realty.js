import AbstractComponent from "./abstract-component";
import {createItems} from "../utils/render";

const getImagesHtml = (imageData) => {
  return(`
    <li class="realty-images-list__items"><img class="realty-images-list__image" src="${imageData}"></li>
  `);
};

const createRealtyTemplate = (cardData) => {
  return (`
    <div class="realty">
      <h2 class="realty__header">${cardData.title}</h2>
      <address class="realty__address">${cardData.address}</address>
      <span class="realty__price">${cardData.price}</span>
      <p class="realty__seller">${cardData.sellerName}</p>
      <p class="realty__description">${cardData.description}</p>
      <ul class="realty-images-list">${createItems(cardData.images, getImagesHtml)}</ul>
     </div>
  `);
};

export default class Realty extends AbstractComponent {

  constructor(cardData) {
    super();

    this._cardData = cardData;
  }

  getTemplate() {
    return createRealtyTemplate(this._cardData);
  }
}
