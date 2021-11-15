import React from "react";
import { Spinner } from "react-bootstrap";
import Meta from "./Meta";

const Loader = ({ width, height, loading, redirecting }) => {
  return (
    <>
      <Meta title={loading ? "Loading" : redirecting ? "Redirecting" : ""} />
      <Spinner
        animation="border"
        role="status"
        style={{
          width: width ? width : "100px",
          height: height ? height : "100px",
          margin: "auto",
          display: "block",
        }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </>
  );
};

export default Loader;
