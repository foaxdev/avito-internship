import AbstractComponent from "./abstract-component";

const createPreviewTemplate = (cardData) => {
  return (`
    <li class="preview-list__item" data-id="${cardData.id}">
      <img class="preview-list__image" src="${cardData.previewImage}" alt="Превью недвижимости">
      <h3 class="preview-list__header">${cardData.title}</h3>
      <address class="preview-list__address">${cardData.address}</address>
      <span class="preview-list__price">${cardData.price}</span>
     </li>
  `);
};

export default class Preview extends AbstractComponent {

  constructor(cardData) {
    super();

    this._cardData = cardData;
  }

  getId() {
    return this._cardData.id;
  }

  getTemplate() {
    return createPreviewTemplate(this._cardData);
  }

  setCardClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
