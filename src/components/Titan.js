import React from "react";

const Titan = () => {
  return (
    <div className="planetContainer">
      <h1 className="planetHeading">TITAN</h1>
      <p className="planetParagrapgh">
        The only moon known to have a dense atmosphere other than Earth, Titan
        is a home away from home (just a few hundred degrees colder!). As a
        bonus, you get striking views of the Rings of Saturn.
      </p>
      <hr className="planetDivider" />
      <div className="estimationWrapper">
        <div className="distanceWrapper">
          <p className="distanceHeading">AVG. DISTANCE</p>
          <p className="estimate">1.6 BIL. km</p>
        </div>
        <div className="travelWrapper">
          <p className="distanceHeading">Est. travel time</p>
          <p className="estimate">7 years</p>
        </div>
      </div>
    </div>
  );
};

export default Titan;
