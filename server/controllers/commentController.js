import { createError } from "../error.js";
import Comments from "../models/Comments.js";
import Video from "../models/Video.js";

export const addComment = async (req, res, next) => {
  console.log("init");
  try {
    const newComment = await Comments({ ...req.body, userId: req.user.id });
    console.log("new comment passed");
    const savedComment = await newComment.save();
    console.log("saved comment passwe");
    res.status(200).json(savedComment);
  } catch (err) {
    next(err);
  }
};

export const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comments.findById(res.params.id);
    const video = await Video.findById(res.params.id);
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comments.findByIdAndDelete(req.params.id);
      res.status(200).json("The comment has been deleted!");
    } else {
      return next(createError(403, "You can delete only your comment!!"));
    }
  } catch (err) {
    next(err);
  }
};

export const getAllComment = async (req, res, next) => {
  try {
    const comments = await Comments.find({ videoId: req.params.videoId });
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};
