import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  recipesListReducer,
  recipeByIdReducer,
} from "./reducers/recipeReducer";
import {
  userRegisterReducer,
  userLoginReducer,
  userProfileReducer,
  userProfileUpdateReducer,
} from "./reducers/userReducer";

const reducer = combineReducers({
  recipesList: recipesListReducer,
  recipeById: recipeByIdReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userProfile: userProfileReducer,
  userProfileUpdate: userProfileUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
