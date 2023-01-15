import MongoStore from "connect-mongo";
import express from "express";
import session from "express-session";
import morgan from "morgan";
import { localsMiddleware } from "./middlewares";
import chatRouter from "./routers/chatRouter";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouters";

const logger = morgan("dev");
const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URL }),
  })
);
app.use(localsMiddleware);
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/chats", chatRouter);

export default app;
