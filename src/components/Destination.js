import React, { useState, useRef, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import moon from "../assets/destination/image-moon.webp";
import mars from "../assets/destination/image-mars.webp";
import europa from "../assets/destination/image-europa.webp";
import titan from "../assets/destination/image-titan.webp";

const Destination = () => {
  const [planetName, setPlanetName] = useState("moon");
  const [activeLink, setActiveLink] = useState("moon");
  const [imgName, setImgName] = useState("");
  const moonRef = useRef(null);
  const marsRef = useRef(null);
  const europaRef = useRef(null);
  const titanRef = useRef(null);

  const destination = [
    { id: 1, planet: moon, name: "moon" },
    { id: 2, planet: mars, name: "mars" },
    { id: 3, planet: europa, name: "europa" },
    { id: 4, planet: titan, name: "titan" },
  ];

  useEffect(() => {
    const x = destination.find((el) => el.name === planetName);
    setImgName(x.planet);
  }, [planetName]);

  useEffect(() => {
    console.log("CURRENT IMAGE NAME", imgName);
  }, [imgName]);

  const getDestination = (val, activeLink) => {
    setPlanetName(val.current.dataset.value);
    setActiveLink(activeLink);
    console.log("ref", planetName);
  };

  return (
    <div className="container destinationBg">
      <main className="section">
        <h1 className="heading">
          <span className="headingSpan">01 </span> Pick your destination
        </h1>
        <div className="destinationContainer">
          <div className="destinationImage">
            <img src={imgName} alt="moon" className="img" />
          </div>
          <div className="destinationDetails">
            <nav className="DestinationNav-container">
              <ul className="DesinationNav">
                <li
                  className="planet-item"
                  data-value="moon"
                  ref={moonRef}
                  onClick={() => {
                    getDestination(moonRef, "moon");
                  }}
                >
                  <NavLink
                    to="moon"
                    className={`planet-nav  ${
                      activeLink === "moon" && "active"
                    }`}
                  >
                    moon
                  </NavLink>
                </li>
                <li
                  className="planet-item"
                  data-value="mars"
                  ref={marsRef}
                  onClick={() => {
                    getDestination(marsRef, "mars");
                  }}
                >
                  <NavLink
                    to="mars"
                    className={`planet-nav  ${
                      activeLink === "mars" && "active"
                    }`}
                  >
                    mars
                  </NavLink>
                </li>
                <li
                  className="planet-item"
                  data-value="europa"
                  ref={europaRef}
                  onClick={() => {
                    getDestination(europaRef, "europa");
                  }}
                >
                  <NavLink
                    to="europa"
                    className={`planet-nav  ${
                      activeLink === "europa" && "active"
                    }`}
                  >
                    europa
                  </NavLink>
                </li>
                <li
                  className="planet-item"
                  data-value="titan"
                  ref={titanRef}
                  onClick={() => {
                    getDestination(titanRef, "titan");
                  }}
                >
                  <NavLink
                    to="titan"
                    className={`planet-nav  ${
                      activeLink === "titan" && "active"
                    }`}
                  >
                    titan
                  </NavLink>
                </li>
              </ul>
            </nav>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
