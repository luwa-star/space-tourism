import React, { useState, useEffect, useRef } from "react";
import vehicle from "../assets/technology/image-launch-vehicle-portrait.jpg";
import spaceport from "../assets/technology/image-spaceport-portrait.jpg";
import capsule from "../assets/technology/image-space-capsule-portrait.jpg";

const tech = [
  {
    terminology: "LAUNCH VEHICLE",
    image: vehicle,
    about:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    terminology: "SPACEPORT",
    image: spaceport,
    about:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    terminology: "SPACE CAPSULE",
    image: capsule,
    about:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];
const Slide = ({ tool, style }) => {
  const { terminology, about, image } = tool;

  return (
    <div className="techSlide" style={style}>
      <div className="techImageContainer">
        <img src={image} alt="technology" className="techImage" />
      </div>
      <div className="techBioContainer">
        <h1 className="crewPosition techPosition">THE TERMINOLOGY</h1>
        <h3 className="crewName">{terminology}</h3>
        <p className="techBio">{about}</p>
      </div>
    </div>
  );
};

const Technology = () => {
  const [activePage, setActivePage] = useState(0);

  const timeoutRef = useRef(null);

  const sliderChange = (val) => {
    setActivePage(val);
  };
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActivePage((prevPage) =>
          prevPage === tech.length - 1 ? 0 : prevPage + 1
        ),
      5000
    );

    return () => {
      resetTimeout();
    };
  }, [activePage]);

  return (
    <div className="container techBg">
      <main className="techSection">
        <h1 className="heading p-left">
          <span className="headingSpan">03 </span> SPACE LAUNCH 101
        </h1>
        <div className="technologyContainer">
          <div className="slideIndicators">
            {tech.map((item, index) => (
              <div
                key={item.terminology}
                className={`slideBullet ${
                  index === activePage ? "bullet-active" : null
                } `}
                onClick={() => sliderChange(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>

          <div className="slideContainer">
            <Slide tool={tech[activePage]} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Technology;
