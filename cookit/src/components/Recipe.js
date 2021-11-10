import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { wordBreak } from "../helpers/wordHelpers";
import Rating from "./Rating";

const Recipe = ({ recipe }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`recipe/${recipe._id}`}>
        <Card.Img className="recipe-card-Image" src={recipe.image} />
      </Link>
      <Card.Body>
        <Link to={`recipe/${recipe._id}`}>
          <Card.Title as="div">
            <strong>{recipe.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Rating value={recipe.rating} text={`${recipe.numReviews} reviews`} />
        </Card.Text>

        <Card.Text as="div">{wordBreak(recipe.description)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Recipe;
