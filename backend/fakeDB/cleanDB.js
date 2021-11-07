import mongoose from "mongoose";
import dotenv from "dotenv";
import fakeDB from "./FakeDB.js";

dotenv.config();

mongoose.connect(
  process.env.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  async () => {
    console.log("Started populating DB");
    await fakeDB.populate();
    await mongoose.connection.close();
    console.log("DB has been populated");
  }
);
