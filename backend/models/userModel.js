import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const message = "This is a required field";

const EMAIL_PATTERN =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, message] },
    email: { type: String, required: [true, message], match: EMAIL_PATTERN },
    password: { type: String, required: [true, message] },
    acceptedPrivacyTerms: { type: Boolean, required: [true, message] },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    });
  });
});

const User = mongoose.model("User", userSchema);

export default User;
