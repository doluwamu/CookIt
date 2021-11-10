import React from "react";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import RecipeScreen from "./screens/RecipeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";

const Routes = () => {
  return (
    <main className="py-3">
      <Container>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/recipe/:id" component={RecipeScreen} />
      </Container>
    </main>
  );
};

export default Routes;
