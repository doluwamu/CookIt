import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

export const isAuth = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    }

    if (!token) {
      return res.sendApiError({
        status: 401,
        title: "Not authorized",
        detail: "Not authorized, no token",
      });
    }
  } catch (error) {
    return res.mongoError(error);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    if (req.user && req.user.isAdmin) {
      next();
    }
    return res.sendApiError({
      status: 401,
      title: "Not authorized",
      detail: "Not authorized as an admin",
    });
  } catch (error) {
    return res.mongoError(error, 401);
  }
};
