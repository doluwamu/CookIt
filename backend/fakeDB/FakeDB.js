import Recipe from "../models/recipeModel.js";
import User from "../models/userModel.js";
import { recipes, users } from "./data/index.js";

class FakeDB {
  async deleteData() {
    try {
      await Recipe.deleteMany({}), await User.deleteMany({});
    } catch (error) {
      console.log(error);
    }
  }

  async addData() {
    try {
      await Recipe.create(recipes);
      await User.create(users);
    } catch (error) {
      console.log(error);
    }
  }

  async populate() {
    await this.deleteData();
    await this.addData();
  }
}

const fakeDB = new FakeDB();

export default fakeDB;
