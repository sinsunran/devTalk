import User from "../../Models/User";
import bcrypt from "bcrypt";

export const getlogin = (req, res) => res.render("userPages/login");
export const postlogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const vaildation = await bcrypt.compare(password, user.password);
  if (!user) {
    return res.status(400).render("userPages/login", {
      eMessage: `there is no user with username ${username}`,
    });
  }
  if (!vaildation) {
    return res.status(400).render("userPages/login", {
      eMessage: "please pu right password in",
    });
  }
  req.session.loggedIn = true;
  req.session.loggedInUser = user;
  console.log(req.session);
  res.status(200).redirect("/chats");
};
