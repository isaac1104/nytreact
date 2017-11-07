import React from "react";
import "./Results.css";

const Results = (props) => {
  console.log(props.result);
  return (
    <div className="card mb-3 container results-box">
      <div className="card-header">
        <h4>Results</h4>
      </div>
      <div className="card-body">
        {props.result.map((article) => {
          return (
            <div>
              <div key={article._id} className="article-display row">
                <a href={article.web_url} target="_blank" className="col-md-4"><img src="http://via.placeholder.com/200X200" className="img-responsive" alt="thumbnail"/></a>
                <div className="col-md-4"><h4>Title: {article.headline.main}</h4></div>
                <div className="col-md-4"><h4>Published: {article.pub_date}</h4></div>
              </div>
              <hr/>
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default Results
