import express from "express";
import {
  getUser,
  getUserById,
  updateUser,
  deleteUser,
  // createUser,
} from "../controller/user.js";

export const userRouter = express.Router();
// userRouter.post("/",createUser);
userRouter.get("/", getUser);
userRouter.get("/:id", getUserById);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
