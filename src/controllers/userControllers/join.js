import User from "../../Models/User";

export const getjoin = (req, res) => res.render("userPages/join");
export const postjoin = async (req, res) => {
  const { username, password, password1, name, stacks, email } = req.body;

  const exists = await User.exists({ username });
  if (exists) {
    return res.status(400).render("userPages/join", {
      eMessage: "username is already exists!",
    });
  }
  if (password !== password1) {
    return res.status(400).render("userPages/join", {
      eMessage: "please check password confirmation!",
    });
  }
  await User.create({
    username,
    email,
    password,
    name,
    stacks: User.formatStacks(stacks),
  });
  return res.redirect("/");
};
