import React from "react";
import Nav from "./Nav";

const Crew = () => {
  return (
    <div className="container crewBg">
      <Nav />
      <main className="section">
        <h1 className="heading">
          <span className="headingSpan">01 </span> Meet your crew
        </h1>
        <div className="destinationContainer">
          <div className="destinationDetails"></div>
          <div className="destinationImage"></div>
        </div>
      </main>
    </div>
  );
};

export default Crew;
