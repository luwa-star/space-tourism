import React from "react";
import { Autoplay, Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css";

import commander from "../assets/crew/image-douglas-hurley.webp";
import specialist from "../assets/crew/image-mark-shuttleworth.webp";
import pilot from "../assets/crew/image-victor-glover.webp";
import engineer from "../assets/crew/image-anousheh-ansari.webp";

const crew = [
  {
    position: "commander",
    name: "Douglas Hurley",
    image: commander,
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    position: "Mission Specialist ",
    name: "MARK SHUTTLEWORTH",
    image: specialist,
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    position: "PILOT ",
    name: "Victor Glover",
    image: pilot,
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    position: "Flight Engineer ",
    name: "Anousheh Ansari",
    image: engineer,
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
];
const Slide = ({ member }) => {
  const { position, name, image, bio } = member;
  return (
    <div className="slide">
      <div className="crewBioContainer">
        <h1 className="crewPosition">{position}</h1>
        <h3 className="crewName">{name}</h3>
        <p className="crewBio">{bio}</p>
      </div>
      <div className="crewImageContainer">
        <img src={image} alt="crew member" className="crewImage" />
      </div>
    </div>
  );
};
const Crew = () => {
  return (
    <div className="container crewBg">
      <main className="section">
        <h1 className="heading">
          <span className="headingSpan">02 </span> Meet your crew
        </h1>
        <div className="crewContainer">
          <Swiper
            modules={[Pagination, Autoplay, EffectFade]}
            spaceBetween={50}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {crew.map((member) => (
              <SwiperSlide>
                <Slide key={member.position} member={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </div>
  );
};

export default Crew;
