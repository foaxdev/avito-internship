import {render, RenderPosition} from "../utils/render";
import Realty from "../components/realty";

export default class RealtyController {

  constructor(container) {
    this._container = container;
    this._realtyComponent = null;
  }

  render(realtyData) {
    this._realtyComponent = new Realty(realtyData);
    render(this._container, this._realtyComponent, RenderPosition.BEFOREEND);
  }
}
