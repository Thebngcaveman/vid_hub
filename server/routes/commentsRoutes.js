import express from "express";
import {
  addComment,
  getAllComment,
  deleteComment,
} from "../controllers/commentController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// add comment
router.post("/", verifyToken, addComment);

// delete comment
router.delete("/:id", verifyToken, deleteComment);

// get comment by id
router.get("/:videoId", verifyToken, getAllComment);

export default router;
