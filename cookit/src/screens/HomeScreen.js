import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Recipe from "../components/Recipe";
import { listRecipes } from "../redux/actions/recipeActions";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const recipesList = useSelector((state) => state.recipesList);
  const { loading, recipes, error } = recipesList;

  useEffect(() => {
    dispatch(listRecipes());
  }, [dispatch]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      {/* <h1 className="pt-30">H1</h1> */}
      <h1 style={{ marginTop: "30px" }}>Cool Recipes</h1>
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
