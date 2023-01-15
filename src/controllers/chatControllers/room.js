import ChatRoom from "../../Models/ChatRoom";

export const getChatRoom = async (req, res) => {
  const { id } = req.params;
  const room = await ChatRoom.findById(id)
    .populate("owner")
    .populate("participants")
    .populate("contents");
  if (!room) {
    return res.status(404).render("404");
  }
  req.session.inRoom = true;
  return res.render("chatPages/chatRoom", { room });
};
