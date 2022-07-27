import React from "react";

const Moon = () => {
  return (
    <div className="planetContainer">
      <h1 className="planetHeading">MOON</h1>
      <p className="planetParagrapgh">
        See our planet as you’ve never seen it before. A perfect relaxing trip
        away to help regain perspective and come back refreshed. While you’re
        there, take in some history by visiting the Luna 2 and Apollo 11 landing
        sites.
      </p>
      <hr className="planetDivider" />
      <div className="estimationWrapper">
        <div className="distanceWrapper">
          <p className="distanceHeading">AVG. DISTANCE</p>
          <p className="estimate">384,400 km</p>
        </div>
        <div className="distanceWrapper">
          <p className="distanceHeading">Est. travel time</p>
          <p className="estimate">3 days</p>
        </div>
      </div>
    </div>
  );
};

export default Moon;
