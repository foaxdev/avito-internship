import {render, RenderPosition} from "../utils/render";
import PreviewController from "./preview-controller";
import Previews from "../components/previews";

const renderPreviews = (cards, previewsContainer) => {
  return cards.map((card) => {
    const previewController = new PreviewController(previewsContainer);
    previewController.render(card);

    return previewController;
  });
};

export default class BoardController {

  constructor(container) {
    this._container = container;
    this._previewsComponent = null;
  }

  render(previewsData) {
    this._previewsComponent = new Previews();
    render(this._container, this._previewsComponent, RenderPosition.BEFOREEND);
    renderPreviews(previewsData, this._previewsComponent);
  }
}
