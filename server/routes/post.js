import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPostById,
  updatePost,
} from "../controller/post.js";

export const postRouter = express.Router();

postRouter.get("/", getPost);
postRouter.get("/:id", getPostById);
postRouter.post("/", createPost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);
