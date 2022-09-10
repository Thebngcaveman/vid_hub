import express from "express";
import {
  addVideo,
  updateVideo,
  deleteVideo,
  addView,
  getSubscribeVideo,
  randomVideo,
  getVideo,
  trendVideo,
  getByTag,
  getBySearch,
} from "../controllers/videoController.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// create a video
router.post("/", verifyToken, addVideo);

// update video
router.put("/:id", verifyToken, updateVideo);

// delete video
router.delete("/:id", verifyToken, deleteVideo);

// get video
router.get("/find/:id", verifyToken, getVideo);

// view video
router.put("/view/:id", verifyToken, addView);

// trend video
router.get("/trend", verifyToken, trendVideo);

// random video
router.get("/random", verifyToken, randomVideo);

// subscribed video
router.get("/sub", verifyToken, getSubscribeVideo);

// get by tag
router.get("/tags", verifyToken, getByTag);

// get by search
router.get("/search", verifyToken, getBySearch);

export default router;
