import Preview from "../components/preview";
import {render, RenderPosition} from "../utils/render";

export default class PreviewController {

  constructor(container) {
    this._container = container;
    this._previewComponent = null;
  }

  render(preview) {
    this._previewComponent = new Preview(preview);
    render(this._container.getElement(), this._previewComponent, RenderPosition.BEFOREEND);

    this._previewComponent.setCardClickHandler(() => {
      // TODO: open new page with preview data
      console.log('Clicked');
    });
  }
}
