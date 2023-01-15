import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  stacks: [{ type: String, required: true }],
  chatRooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "ChatRoom" }],
  chats: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chat" }],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

userSchema.static("formatStacks", function (stacks) {
  return stacks
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);
export default User;
