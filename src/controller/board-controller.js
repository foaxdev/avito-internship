import {render, RenderPosition} from "../utils/render";
import PreviewController from "./preview-controller";
import Preview from "../components/preview";

const renderPreviews = (cards) => {
  return cards.map((card) => {
    const taskController = new PreviewController();
    taskController.render(card);

    return taskController;
  });
};

export default class BoardController {

  constructor(container) {
    this._container = container;
    this._previewComponent = null;
  }

  render(previewsData) {
    this._previewComponent = new Preview(previewsData);
    render(this._container, this._previewComponent, RenderPosition.BEFOREEND);

    renderPreviews(previewsData);
  }
}
