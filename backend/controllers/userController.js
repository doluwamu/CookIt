import User from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, acceptedPrivacyTerms } = req.body;

    if (!name) {
      return res.sendApiError({
        title: "Missing data",
        detail: "Name is a required field",
      });
    }

    if (!email) {
      return res.sendApiError({
        title: "Missing data",
        detail: "Email is a required field",
      });
    }

    if (!password) {
      return res.sendApiError({
        title: "Missing data",
        detail: "Password is a required field",
      });
    }

    if (!acceptedPrivacyTerms) {
      return res.sendApiError({
        title: "Missing data",
        detail: "Accept privacy terms",
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.sendApiError({
        title: "Existing data",
        detail: "User with this email already exists",
      });
    }

    const user = await User.create({
      name,
      email,
      password,
      acceptedPrivacyTerms,
    });

    if (!user) {
      return res.sendApiError({
        status: 400,
        title: "Invalid data!",
        detail: "Invalid user detail!",
      });
    }

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      acceptedPrivacyTerms: user.acceptedPrivacyTerms,
      token: generateToken(user._id),
    });
  } catch (error) {
    return res.mongoError(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.sendApiError({
        title: "Missing data",
        detail: "Email is a required field",
      });
    }

    if (!password) {
      return res.sendApiError({
        title: "Missing data",
        detail: "Password is a required field",
      });
    }

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      return res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        acceptedPrivacyTerms: user.acceptedPrivacyTerms,
        token: generateToken(user._id),
      });
    }

    return res.sendApiError({
      status: 404,
      title: "Invalid data",
      detail: "Invalid email or password",
    });
  } catch (error) {
    return res.mongoError(error);
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.sendApiError({
        status: 404,
        title: "Invalid data",
        detail: "User not found",
      });
    }

    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      acceptedPrivacyTerms: user.acceptedPrivacyTerms,
    });
  } catch (error) {
    return res.mongoError(error);
  }
};

export const editUserProfile = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.sendApiError({
        status: 404,
        title: "Invalid data",
        detail: "User not found",
      });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    if (password) {
      user.password = password || user.password;
    }

    const editedUser = await user.save();
    return res.json({
      _id: editedUser._id,
      name: editedUser.name,
      email: editedUser.email,
      isAdmin: editedUser.isAdmin,
      acceptedPrivacyTerms: editedUser.acceptedPrivacyTerms,
      token: generateToken(editedUser._id),
    });
  } catch (error) {
    return res.mongoError(error);
  }
};
