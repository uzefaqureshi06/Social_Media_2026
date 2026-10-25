import express from "express";
import {
  createBookmark,
  deleteBookmark,
  getBookmark,
  getBookmarkById,
} from "../controller/bookmark.js";

export const bookmarkRouter = express.Router();

bookmarkRouter.get("/", getBookmark);
bookmarkRouter.get("/:id", getBookmarkById);
bookmarkRouter.post("/", createBookmark);
bookmarkRouter.delete("/:id", deleteBookmark);
