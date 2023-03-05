import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="erro-page section">
      <div className="error-container">
        <h1>error page</h1>
        <Link to="/" className="btn btn-primary">
          Back To Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
