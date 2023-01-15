import "dotenv/config";
import db from "../db";
import app from "./server";
import User from "./Models/User";
import Chat from "./Models/Chat";
import ChatRoom from "./Models/ChatRoom";

const PORT = process.env.PORT;

app.listen(PORT, () =>
  console.log(`✅the server is now listening on port ${PORT}🚀`)
);
