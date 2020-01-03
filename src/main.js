import Api from "./api";
import BoardController from "./controller/board-controller";

const END_POINT = `http://134.209.138.34`;
const api = new Api(END_POINT);

const container = document.querySelector(`.container`);
const boardController = new BoardController(container);

api.getCards().then((cards) => {
  boardController.render(cards);
});
