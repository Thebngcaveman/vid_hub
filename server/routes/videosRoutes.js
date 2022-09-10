import express from "express";
import {
  addVideo,
  updateVideo,
  deleteVideo,
} from "../controllers/videoController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// create a video
router.post("/", verifyToken, addVideo);

// update video
router.put("/", verifyToken, updateVideo);

// delete video
router.delete("/", verifyToken, deleteVideo);

// get video
router.get("/", verifyToken, getVideo);

export default router;
