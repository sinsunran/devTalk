import User from "../../Models/User";

export const getUserList = async (req, res) => {
  const { _id: id } = req.session.loggedInUser;
  const user = await User.findById(id).populate("friends");
  return res
    .status(200)
    .render("userPages/friendsList", { pageTitle: "Friends", user });
};
