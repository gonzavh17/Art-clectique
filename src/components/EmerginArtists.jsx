import React, { useEffect } from "react";
import Reveal from "../animations/Reveal";
import BlackReveal from "../animations/BlackReveal";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Image } from "../Image";

function EmerginArtists() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let tabs = [
    {
      id: "styles",
      label: "The new artists",
      content: `Discover the vibrant world of emerging pop art talents who are pushing the boundaries of creativity and redefining the genre for a new era. From bold reinterpretations of classic pop art themes to innovative explorations of contemporary culture, these rising stars captivate audiences with their fresh perspectives and dynamic visual language. Explore a curated selection of works that celebrate experimentation, diversity, and the enduring legacy of pop art in today's ever-evolving artistic landscape."`,
    },
    {
      id: "music",
      label: "Pop Art Trends",
      content: `Explore the latest trends within the emerging pop art scene. Discover the themes, styles, and techniques gaining popularity among younger artists and how they are shaping the future direction of the movement.`,
    },
    {
      id: "videos",
      label: "New talents",
      content:
        "Delve into the world of up-and-coming talent within the pop art scene. Learn about promising artists through brief biographies alongside examples of their latest work and how they are contributing to the evolution of pop art today.",
    },
  ];

  return (
    <div className="styles">
      <div className="styles-title_container">
        <BlackReveal>
          <p className="styles-title">Influential Artists & History</p>
        </BlackReveal>

        <Reveal customDelay={0.5}>
          <div className="lg:w-1/3 flex flex-col tab-parent justify-center items-center">
            <Tabs aria-label="Dynamic tabs" items={tabs}>
              {(item) => (
                <Tab key={item.id} title={item.label}>
                  <Card>
                    <CardBody>{item.content}</CardBody>
                  </Card>
                </Tab>
              )}
            </Tabs>
          </div>
        </Reveal>
      </div>

      <div className="artists-container">
        <div className="artists-galery">
          <p className="styles-title">New wave</p>
          <Reveal customDelay={0.5}>
            <p className="styles-art_description">
            The new wave of pop art focuses on reimagining traditional themes and motifs through a contemporary lens. Embracing digital technologies, social commentary, and diverse cultural influences, this evolution of pop art explores the intersection of art, technology, and society in the modern age. From playful reinterpretations of iconic imagery to thought-provoking explorations of current events and pop culture phenomena, these emerging artists are pushing the boundaries of the genre while staying true to its vibrant and accessible spirit."
            </p>
          </Reveal>
        </div>

        <div className="styles-border">
          <div className="styles-art_container">
            <BlackReveal>
              <p className="styles-art_title">Takashi Murakam</p>
            </BlackReveal>
            <img className="styles-art_img" src={Image.murakami} alt="" />

            <Reveal customDelay={0.5}>
              <p className="styles-art_description">
              Takashi Murakami is a renowned Japanese contemporary artist known for his colorful and playful works that blend elements of pop culture, anime, and traditional Japanese art. Often described as the "Japanese Andy Warhol," Murakami's art explores themes of consumerism, globalization, and the intersection of high and low culture. He is best known for his iconic "superflat" style, characterized by bold colors, flat planes, and graphic imagery. Murakami's work spans across various mediums including painting, sculpture, and animation, and he has collaborated with numerous brands and celebrities. Through his distinctive aesthetic and innovative approach, Murakami has become one of the most influential and recognizable artists of his generation.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="styles-border">
          <div className="styles-art_container">
            <BlackReveal>
              <p className="styles-art_title">Kaws</p>
            </BlackReveal>
            <img className="styles-art_img" src={Image.kaws} alt="" />

            <Reveal customDelay={0.5}>
              <p className="styles-art_description">
              Kaws, whose real name is Brian Donnelly, is a contemporary artist and designer known for his distinctive style that blurs the lines between fine art and popular culture. Emerging from the world of street art, Kaws gained recognition for his unique approach to reinterpreting iconic characters and imagery from cartoons, advertising, and consumer products. His work often features bold, graphic compositions with exaggerated proportions and surreal elements. Kaws has achieved global acclaim for his large-scale sculptures, paintings, and limited-edition toys, attracting a diverse audience ranging from collectors to fans of urban culture. Through his playful yet thought-provoking creations, Kaws continues to captivate audiences worldwide and challenge perceptions of contemporary art.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="styles-border">
          <div className="styles-art_container">
            <BlackReveal>
              <p className="styles-art_title">Yayoi Kusama</p>
            </BlackReveal>
            <img className="styles-art_img" src={Image.yayoi} alt="" />

            <Reveal customDelay={0.5}>
              <p className="styles-art_description">
              Yayoi Kusama is a celebrated Japanese contemporary artist known for her avant-garde work across various mediums, including painting, sculpture, performance art, and installations. With a career spanning over seven decades, Kusama is renowned for her unique artistic vision characterized by repetitive patterns, polka dots, and psychedelic colors. She is particularly recognized for her immersive, large-scale installations, such as her "Infinity Mirror Rooms," which invite viewers to experience a sense of infinity and transcendence. Kusama's art often explores themes of infinity, obsession, and the interconnectedness of the self and the universe. Despite facing challenges throughout her life, including struggles with mental health, Kusama's relentless creativity and determination have solidified her as one of the most influential and iconic artists of the 20th and 21st centuries.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmerginArtists;
