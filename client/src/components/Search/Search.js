import React from "react";
import Input from "./Input";
import Button from "./Button";
import "./Search.css";

const Search = (props) => {
  return (
    <div className="card bg-light mb-3 container">
      <div className="card-header">
        <h4>Search</h4>
      </div>
      <div className="card-body">
        <form onSubmit={props.handleFormSubmit}>
          <Input handleInputChange={props.handleInputChange}/>
          <Button handleButtonClick={props.handleButtonClick}/>
        </form>
      </div>
    </div>
  )
};

export default Search;
