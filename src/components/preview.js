import AbstractComponent from "./abstract-component";
import {createItems} from "../utils/render";

const getPreviewHtml = (cardData) => {
  return (`
    <li class="preview-list__item" data-id="${cardData.id}">
      <img class="preview-list__image" src="${cardData.previewImage}" alt="Превью недвижимости">
      <h3 class="preview-list__header">${cardData.title}</h3>
      <address class="preview-list__address">${cardData.address}</address>
      <span class="preview-list__price">${cardData.price}</span>
     </li>
  `);
};

const createPreviewTemplate = (cardData) => {
  return (`
    <ul class="preview-list">
      ${createItems(cardData, getPreviewHtml)}
    </ul>
  `);
};

export default class Preview extends AbstractComponent {

  constructor(cardData) {
    super();

    this._cardData = cardData;
  }

  getTemplate() {
    return createPreviewTemplate(this._cardData);
  }

  setCardClickHandler(handler) {
    const cards = document.querySelectorAll(`.preview-list__item`);

    cards.forEach((card) => {
      card.addEventListener(`click`, handler);
    });
  }
}
