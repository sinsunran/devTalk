import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  chat: { type: String, required: true },
  createdAt: { type: Date, default: new Date() },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ChatRoom",
    required: true,
  },
});

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;
