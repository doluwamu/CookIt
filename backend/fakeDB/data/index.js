import mongoose from "mongoose";

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();
const user3Id = mongoose.Types.ObjectId();

export const users = [
  {
    _id: user1Id,
    name: "test1",
    email: "test1@gmail.com",
    password: "testtest1",
    acceptedPrivacyTerms: true,
  },
  {
    _id: user2Id,
    name: "test2",
    email: "test2@gmail.com",
    password: "testtest2",
    acceptedPrivacyTerms: true,
  },
  {
    _id: user3Id,
    name: "admin",
    email: "admin@gmail.com",
    password: "adminuser",
    acceptedPrivacyTerms: true,
    isAdmin: true,
  },
];

export const recipes = [
  {
    user: user3Id,
    name: "Pizza recipe",
    image: "/images/pizza.jpg",
    ingredients: ["pepperonies", "cheese", "flour", "onions", "chicken"],
    instructions: ["Boil water", "Pour pepperonies"],
    rating: 4,
    numReviews: 19,
    description: "Very cool recipe. Makes your next delicacy delicious",
  },
  {
    user: user3Id,
    name: "Burger recipe",
    image: "/images/burger.jpg",
    ingredients: ["pepperonies", "cheese", "flour", "onions", "chicken"],
    instructions: ["Boil water", "Pour pepperonies"],
    rating: 2,
    numReviews: 44,
    description: "Very cool recipe. Makes your next delicacy delicious",
  },
  {
    user: user3Id,
    name: "Fries recipe",
    image: "/images/fries.jpg",
    ingredients: ["pepperonies", "cheese", "flour", "onions", "chicken"],
    instructions: ["Boil water", "Pour pepperonies"],
    rating: 3.5,
    numReviews: 12,
    description: "Very cool recipe. Makes your next delicacy delicious",
  },
  {
    user: user3Id,
    name: "cake recipe",
    image: "/images/cake.jpg",
    ingredients: ["flour", "sugar", "color"],
    instructions: ["Mix in water", "add sugar"],
    rating: 4.5,
    numReviews: 25,
    description: "Very cool recipe. Makes your next delicacy delicious",
  },
];
