import React from "react";
import { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerms } = useGlobalContext();
  const searchValue = useRef("");

  const saveSearchvalue = () => {
    setSearchTerms(searchValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            <h2>Search for your favourit cocktail!</h2>
          </label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={saveSearchvalue}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
