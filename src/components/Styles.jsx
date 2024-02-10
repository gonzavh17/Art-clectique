import React from "react";
import { useEffect } from "react";
import { Image } from "../Image";
import BlackReveal from "../animations/BlackReveal";
import Reveal from "../animations/Reveal";
import CardTab from "./CardTab";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

function Styles() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let tabs = [
    {
      id: "styles",
      label: "Styles",
      content: ` Dive into the variety and vibrant expression of pop art through its
      different styles. From iconic representations of popular culture to
      dynamic abstractions and social reflections, discover how pop art has
      evolved to encompass a wide range of artistic approaches. Explore each
      unique style and immerse yourself in the creative energy of the pop
      art movement in all its forms.`,
    },
    {
      id: "music",
      label: "Fun Fact",
      content: `Some pop art works, such as Claes Oldenburg's oversized sculptures of everyday objects like hamburgers and typewriters, were intended to provoke a sense of wonder and absurdity, inviting viewers to reconsider the objects of their everyday lives.`,
    },
    {
      id: "videos",
      label: "Did you know?",
      content:
        "Did you know? Pop art emerged as a response to the consumerism and mass production of the post-war era, challenging traditional notions of fine art and blurring the boundaries between high and low culture.",
    },
  ];

  return (
    <div className="styles">
      <div className="styles-title_container">
        <BlackReveal>
          <p className="styles-title">Pop art Styles</p>
        </BlackReveal>

        <Reveal customDelay={0.5}>
          <div className=" m:w-full lg:w-1/3 flex flex-col tab-parent justify-center items-center">
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

      <div className="styles-galery">
        <div className="styles-border">
          <div className="styles-art_container">
            <BlackReveal>
              <p className="styles-art_title">Pop Art Iconic</p>
            </BlackReveal>
            <img className="styles-art_img" src={Image.soup} alt="" />

            <p className="styles-art_author">
              "Campbell's Soup Cans" (1962) - Andy Warhol
            </p>
            <Reveal customDelay={0.5}>
              <p className="styles-art_description">
                Iconic Pop Art showcases the quintessential works of the pop art
                movement, featuring bold representations of iconic symbols and
                imagery from popular culture. From Andy Warhol's iconic
                Campbell's Soup Cans to Roy Lichtenstein's comic book-inspired
                masterpieces, this style celebrates the everyday objects and
                celebrities that have become iconic icons of the modern era.
                Vibrant colors, bold lines, and repeated motifs define this
                style, challenging traditional notions of art and elevating the
                mundane to the extraordinary. Explore the iconic works that have
                shaped the cultural landscape and continue to inspire creativity
                and innovation in the world of art.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="styles-border">
          <div className="styles-art_container">
            <BlackReveal>
              <p className="styles-art_title">Pop Art Abstraction</p>
            </BlackReveal>
            <img className="styles-art_img" src={Image.blaze} alt="" />

            <p className="styles-art_author">
              "Blaze 1" (1962) - Bridget Riley
            </p>
            <Reveal customDelay={0.5}>
              <p className="styles-art_description">
                Pop Art Abstraction explores the dynamic intersection between
                the pop art movement and abstract expressionism. Characterized
                by vibrant colors, bold geometric shapes, and playful
                compositions, this style pushes the boundaries of traditional
                representation to evoke a sense of energy and vitality. Artists
                in this genre experiment with form, line, and color to create
                visually captivating works that challenge the viewer's
                perception and invite interpretation. While rooted in the
                aesthetics of popular culture, Pop Art Abstraction transcends
                literal representation to offer a fresh perspective on the
                essence of the modern world. Explore the vibrant and expressive
                world of Pop Art Abstraction, where creativity knows no bounds
                and imagination reigns supreme.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="styles-border">
          <div className="styles-art_container">
            <BlackReveal>
              <p className="styles-art_title">Social Pop Art</p>
            </BlackReveal>
            <img className="styles-art_img" src={Image.yourBody} alt="" />

            <p className="styles-art_author">
              "Your Body Is a Battleground" (1989) - Barbara Kruger
            </p>
            <Reveal customDelay={0.5}>
              <p className="styles-art_description">
                Social Pop Art delves into the intersection between art and
                society, using the vibrant imagery and bold aesthetics of pop
                art to comment on contemporary social and political issues.
                Through iconic representations of popular culture and everyday
                life, artists in this genre seek to challenge societal norms,
                provoke thought, and spark conversation. From Barbara Kruger's
                powerful slogans to Keith Haring's playful yet poignant murals,
                Social Pop Art confronts pressing issues such as consumerism,
                inequality, and environmental degradation with wit, humor, and a
                critical eye. Explore the thought-provoking works that continue
                to inspire social change and reflection in the dynamic world of
                pop art.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Styles;
