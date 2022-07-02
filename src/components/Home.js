import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
const Home = () => {
  return (
    <div className="container homeBg">
      <Nav />
      <main className="homeSection">
        <div className="homeSection1">
          <h1 className="home-subHeading"> So, you want to travel to</h1>
          <h2 className="home-heading"> Space</h2>
          <p className="homeText">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="homeSection2">
          <Link to="/destination" className="homeLinkWrapper">
            <div className="homeLink">Explore</div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
