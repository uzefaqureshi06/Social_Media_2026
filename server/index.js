import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.js";
import { postRouter } from "./routes/post.js";
import { bookmarkRouter } from "./routes/bookmark.js";
import { authRouter } from "./routes/auth.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/post", postRouter);
app.use("/api/v1/bookmark", bookmarkRouter);
app.use("/api/v1/auth", authRouter);
app.listen(PORT, () => {
  console.log(`Sever is running on ${PORT}`);
});
