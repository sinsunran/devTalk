import User from "../../Models/User";

export const getChatList = async (req, res) => {
  const { _id: id } = req.session.loggedInUser;
  const user = await User.findById(id).populate("chatRooms");
  const rooms = user.chatRooms;
  res.render("chatPages/chatList", { pageTitle: "Chat", rooms });
};
