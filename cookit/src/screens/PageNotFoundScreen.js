import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Meta from "../components/Meta";

const PageNotFoundScreen = () => {
  return (
    <>
      <Meta title="Page not found" />
      <Link to="/" className="btn btn-light">
        Go Back
      </Link>
      <h1>Page not found</h1>
    </>
  );
};

export default PageNotFoundScreen;
