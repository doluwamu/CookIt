import express from "express";
import {
  editUserProfile,
  getUserProfile,
  loginUser,
  registerUser,
} from "../controllers/userController.js";
import { isAuth } from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(loginUser);
router
  .route("/profile")
  .get(isAuth, getUserProfile)
  .put(isAuth, editUserProfile);

export default router;
