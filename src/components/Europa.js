import React from "react";

const Europa = () => {
  return (
    <div className="planetContainer">
      <h1 className="planetHeading">EUROPA</h1>
      <p className="planetParagrapgh">
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a
        winter lover’s dream. With an icy surface, it’s perfect for a bit of ice
        skating, curling, hockey, or simple relaxation in your snug wintery
        cabin.
      </p>
      <hr className="planetDivider" />
      <div className="estimationWrapper">
        <div className="distanceWrapper">
          <p className="distanceHeading">AVG. DISTANCE</p>
          <p className="estimate">628 MIL. km</p>
        </div>
        <div className="travelWrapper">
          <p className="distanceHeading">Est. travel time</p>
          <p className="estimate">3 years</p>
        </div>
      </div>
    </div>
  );
};

export default Europa;
