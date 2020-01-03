import Preview from "../components/preview";

export default class PreviewController {

  constructor() {
    this._previewComponent = null;
  }

  render(preview) {
    this._previewComponent = new Preview(preview);

    this._previewComponent.setCardClickHandler((evt) => {
      // TODO: open new page with preview data
    });
  }
}
