import React from "react";
import "./style.css";

const EpisodeDetails = (props) => {
  const { number, runtime, airdate } = props;
  return (
    <div className="card episode">
      <div className="card-body">
        <h5 className="card-title">Episode Number : {number}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Duration : {runtime}</h6>
        <p className="card-text">Release Date : {airdate}</p>
      </div>
    </div>
  );
};

export default EpisodeDetails;
