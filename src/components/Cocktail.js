import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Cocktail = ({ id, name, glass, info, image }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h2>{name} </h2>
        <h3>{glass}</h3>
        <h4>{info}</h4>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
