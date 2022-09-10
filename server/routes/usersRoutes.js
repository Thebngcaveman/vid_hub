import express from "express";
import {
  deleteById,
  dislike,
  getUser,
  like,
  subscribe,
  updateById,
} from "../controllers/userController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// update user
router.put("/:id", verifyToken, updateById);

// delete user
router.delete("/:id", verifyToken, deleteById);

// get user
router.get("/find/:id", getUser);

// subscribe user
router.put("/sub/:id", verifyToken, subscribe);

// like
router.put("/like/:videoId", verifyToken, like);

// unlike
router.put("dislike/:videoId", verifyToken, dislike);

export default router;
