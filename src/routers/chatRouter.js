import express from "express";
import { getChatList } from "../controllers/chatControllers/list";
import { getChatRoom } from "../controllers/chatControllers/room";

const chatRouter = express.Router();
const mongoID = "[0-9a-zA-Z]{24}";

chatRouter.route("/").get(getChatList);
chatRouter.route(`/:id(${mongoID})`).get(getChatRoom);

export default chatRouter;
