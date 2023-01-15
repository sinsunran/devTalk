import express from "express";
import { getjoin, postjoin } from "../controllers/userControllers/join";
import { getlogin, postlogin } from "../controllers/userControllers/login";

const rootRouter = express.Router();

rootRouter.route("/").get(getlogin).post(postlogin);
rootRouter.route("/join").get(getjoin).post(postjoin);

export default rootRouter;
