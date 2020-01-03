export default class Realty {

  constructor(data) {
    this.id = data[`id`];
    this.address = data[`address`];
    this.title= data[`title`];
    this.previewImage = data[`previewImage`];
    this.price = data[`price`];
  }

  static parseRealty(data) {
    return new Realty(data);
  }

  static parseRealties(data) {
    return data.map(Realty.parseRealty);
  }
}
