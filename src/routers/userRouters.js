import express from "express";
import { getUserList } from "../controllers/userControllers/userList";

const userRouter = express.Router();
const mongoID = "[0-9a-zA-Z]{24}";

userRouter.route("/").get(getUserList);
userRouter.route(`/:id(${mongoID})`).get();

export default userRouter;
