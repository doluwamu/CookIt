import React from "react";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import RecipeScreen from "./screens/RecipeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
// import PageNotFoundScreen from "./screens/PageNotFoundScreen";

const Routes = () => {
  return (
    <main className="py-3">
      <Container>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/search/:keyword" component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/recipe/:id" component={RecipeScreen} />
        {/* <Route path="/:notFound" component={PageNotFoundScreen} exact /> */}
      </Container>
    </main>
  );
};

export default Routes;
