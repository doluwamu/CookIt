import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Recipe from "../components/Recipe";
import { listRecipes } from "../redux/actions/recipeActions";
import Loader from "../components/Loader";
import Meta from "../components/Meta";
import { ServerError } from "../errors/ServerErrors";
import { Link } from "react-router-dom";

const HomeScreen = ({ match: { params } }) => {
  const { keyword } = params;
  const dispatch = useDispatch();

  const recipesList = useSelector((state) => state.recipesList);
  const { loading, recipes, error } = recipesList;

  useEffect(() => {
    dispatch(listRecipes(keyword));
  }, [dispatch, keyword]);

  if (loading) {
    return <Loader loading={true} />;
  }

  if (error) {
    return <ServerError error={error} />;
  }

  return (
    <>
      <Meta />

      {!keyword ? (
        <h1 style={{ marginTop: "30px" }}>Cool Recipes</h1>
      ) : (
        <>
          <Link to="/" className="btn btn-light">
            Go Back
          </Link>
          <h1 style={{ marginTop: "30px" }}>
            Recipes related to "{keyword}" found
          </h1>
        </>
      )}
      <Row>
        {recipes &&
          recipes.map((recipe) => (
            <Col sm={12} md={6} lg={4} xl={3} key={recipe._id}>
              <Recipe recipe={recipe} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default HomeScreen;
