import React from "react";

const Mars = () => {
  return (
    <div className="planetContainer">
      <h1 className="planetHeading">MARS</h1>
      <p className="planetParagrapgh">
        Don’t forget to pack your hiking boots. You’ll need them to tackle
        Olympus Mons, the tallest planetary mountain in our solar system. It’s
        two and a half times the size of Everest!.
      </p>
      <hr className="planetDivider" />
      <div className="estimationWrapper">
        <div className="distanceWrapper">
          <p className="distanceHeading">AVG. DISTANCE</p>
          <p className="estimate">225 MIL. km</p>
        </div>
        <div className="travelWrapper">
          <p className="distanceHeading">Est. travel time</p>
          <p className="estimate">9 months</p>
        </div>
      </div>
    </div>
  );
};

export default Mars;
