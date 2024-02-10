import React from "react";
import Card from "../animations/Card";
import { Image } from "../Image";
import {Button, ButtonGroup} from "@nextui-org/react";

function Galery() {
  const cardsData = [
    { text: "Influential Artists & History", imageSrc: Image.roy1, to:"/artists" },
    { text: "Explore Pop Art Styles", imageSrc: Image.roy3 , to:"/styles" },
    { text: "Emerging Artists", imageSrc: Image.roy2 },
  ];

  return (
    <div className="galery">
      <div className="home-cards">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            text={card.text}
            imageSrc={card.imageSrc}
            smallText={card.smallText}
            to={card.to}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Galery;
