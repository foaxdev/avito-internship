import Api from "./api";
import BoardController from "./controller/board-controller";
import {END_POINT} from "./const";
import RealtyController from "./controller/realty-controller";

const api = new Api(END_POINT);

let container = document.querySelector(`.container`);
if (container !== null) {
  const boardController = new BoardController(container);

  api.getCards().then((cards) => {
    boardController.render(cards);
  });
} else {
  container = document.querySelector(`.main`);
  const realtyController = new RealtyController(container);

  const url = new URL(window.location.href);
  api.getCardInfo(url.searchParams.get(`id`)).then((realtyData) => {
    realtyController.render(realtyData[0]);
  });
}
