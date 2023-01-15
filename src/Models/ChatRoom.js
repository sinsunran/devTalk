import mongoose from "mongoose";

const chatRoomSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  chats: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
});

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);

export default ChatRoom;
