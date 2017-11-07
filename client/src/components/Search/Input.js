import React from "react";

const Input = (props) => {
  return(
    <div>
      <h5>Input</h5>
      <input onChange={props.handleInputChange} type="text" className="form-control" value={props.search}></input>
      <h5>Start Year (yyyy)</h5>
      <input type="text" className="form-control"></input>
      <h5>End Year (yyyy)</h5>
      <input type="text" className="form-control"></input>
    </div>
  )
};

export default Input;
