import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import RecipeScreen from "./screens/RecipeScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/recipe/:id" component={RecipeScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
