import AbstractComponent from "./abstract-component";

const createRealtyTemplate = (cardData) => {
  return (`
    <div class="realty">
      <h2 class="realty__header">${cardData.title}</h2>
      <address class="realty__address">${cardData.address}</address>
      <span class="realty__price">${cardData.price}</span>
      <p class="realty__seller">${cardData.sellerName}</p>
      <p class="description">${cardData.description}</p>
      <!-- Images -->
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
