import React from "react";
import { Image } from "../Image";
import BlackReveal from "../animations/BlackReveal";
import Reveal from "../animations/Reveal";
import Galery from "./Galery";

function Home() {


  return (
    <div className="home">
        <div className="home-container">
        <div className="home-title_container">
        <BlackReveal>
        <p className="home-title">Pop Art Extravaganza!</p>
        </BlackReveal>
        </div>
       <Reveal customDelay={.5}>
       <img className="home-img" src={Image.popArt1} alt="" />
       </Reveal>
        </div>
       <Galery/>
    </div>
  );
}

export default Home;
