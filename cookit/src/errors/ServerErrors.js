import React from "react";

export const extractServerError = (serverError) => {
  let errors = [{ title: "Error!", detail: "Ooops, something went wrong!" }];
  if (serverError && serverError.data && serverError.data.errors) {
    errors = serverError.data.errors;
  }
  return errors;
};

export const ServerError = ({ error }) => {
  return (
    <div>
      {error &&
        error.length > 0 &&
        error.map((e) => {
          return (
            <div
              id="alert-danger"
              className="alert alert-danger my-3"
              key={e.title}
            >
              <span>{e.detail}</span>
            </div>
          );
        })}
    </div>
  );
};
