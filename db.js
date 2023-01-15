import mongoose from "mongoose";

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;

db.once("open", () => {
  console.log("✅the MongoDB now open");
});

db.on("error", (error) => {
  console.log("⛔DB error");
});

export default db;
