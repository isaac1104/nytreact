import React from "react";
import "./Results.css";

const Results = (props) => {
  console.log(props.result);
  return (
    <div className="card mb-3 container">
      <div className="card-header">
        <h4>Results</h4>
      </div>
      <div className="card-body">
        {props.result.map((article) => {
          return(
            <div>
              <div>{article.headline.main}</div>
              <div>{article.pub_date}</div>
              <div><a href={article.web_url}>go to article</a></div>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Results
