import React, { useEffect } from "react";
import Reveal from "../animations/Reveal";
import BlackReveal from "../animations/BlackReveal";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Image } from "../Image";

function Artists() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let tabs = [
    {
      id: "styles",
      label: "Influential",
      content: `Explore the dynamic interplay of cultural movements and artistic revolutions that have shaped the vibrant world of pop art. From its roots in the post-war era to its enduring impact on contemporary creativity, delve into the kaleidoscope of influences that define this electrifying genre. Witness how pop art transcends boundaries, merging high and low culture, challenging conventions, and sparking a global dialogue on the intersection of art and society. Immerse yourself in a celebration of color, satire, and iconography as we unravel the rich tapestry of pop art's influence on our collective imagination."`,
    },
    {
      id: "music",
      label: "Origins",
      content: `The term "pop art" was first coined in 1955 but was popularized by British critic Lawrence Alloway in the 1960s.`,
    },
    {
      id: "videos",
      label: "Visual Experimentation:",
      content:
        "Pop art artists employed innovative techniques like silk-screening and collage to capture the essence of mass culture and challenge the conventions of traditional art.",
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
          <p className="styles-title">The Birth of Pop Art</p>
          <Reveal customDelay={0.5}>
            <p className="styles-art_description">
              The pop art movement emerged in the mid-20th century as a reaction
              to abstract expressionism and abstract art in general. One of the
              key figures in the early days of pop art was Richard Hamilton, a
              British artist often regarded as the movement's founding father.
              In 1956, Hamilton created a work titled "Just what is it that
              makes today's homes so different, so appealing?", which is
              considered one of the early iconic pieces of pop art. This piece
              incorporated images from popular culture and advertising, laying
              the groundwork for what would later become known as the pop art
              movement. Hamilton, along with other artists such as Eduardo
              Paolozzi and the Independent Group in the UK, as well as artists
              like Andy Warhol and Roy Lichtenstein in the United States, began
              to explore the incorporation of imagery and symbols from mass
              culture into their art, marking the beginning of pop art as a
              distinctive artistic movement.
            </p>
          </Reveal>
        </div>
        
        <div className="styles-border">
          <div className="styles-art_container">
            <BlackReveal>
              <p className="styles-art_title">Andy Warhol </p>
            </BlackReveal>
            <img className="styles-art_img" src={Image.warhol} alt="" />

            <Reveal customDelay={0.5}>
              <p className="styles-art_description">
              Andy Warhol (1928–1987) was an iconic American artist known for his pioneering work in the pop art movement. Renowned for his fascination with celebrity culture and consumerism, Warhol's art often featured images of popular icons such as Marilyn Monroe, Elvis Presley, and Campbell's soup cans. He was a leading figure in the 1960s New York art scene, creating a vast body of work that included paintings, silkscreens, films, and sculptures. Warhol's distinctive style, characterized by vibrant colors and repetitive motifs, challenged traditional notions of art and mass-produced culture, leaving a lasting impact on the world of contemporary art.
              </p>
            </Reveal>
          </div>
        </div>
          
        <div className="styles-border">
          <div className="styles-art_container">
            <BlackReveal>
              <p className="styles-art_title">Roy Lichtenstein  </p>
            </BlackReveal>
            <img className="styles-art_img" src={Image.roy} alt="" />

            <Reveal customDelay={0.5}>
              <p className="styles-art_description">
              Roy Lichtenstein (1923–1997) was an influential American pop artist known for his bold, comic book-style paintings. His work often featured iconic imagery from popular culture, such as comic strips and advertisements, rendered in a style that mimicked the Ben-Day dots printing technique used in mass-produced comics. Lichtenstein's art explored themes of consumerism, mass media, and the relationship between high and low culture. His use of vibrant colors, thick outlines, and exaggerated expressions became signature elements of his style, making him one of the most recognizable figures in the pop art movement.
              </p>
            </Reveal>
          </div>
        </div>

        
        <div className="styles-border">
          <div className="styles-art_container">
            <BlackReveal>
              <p className="styles-art_title">Tom Wesselmann</p>
            </BlackReveal>
            <img className="styles-art_img" src={Image.tom} alt="" />

            <Reveal customDelay={0.5}>
              <p className="styles-art_description">
              Tom Wesselmann (1931–2004) was an American artist associated with the pop art movement. He was known for his bold and colorful representations of the female figure, often depicted in a stylized, graphic manner. Wesselmann's work frequently incorporated elements of everyday life, such as household objects and advertisements, which he recontextualized within the realm of fine art. He was particularly recognized for his "Great American Nude" series, which presented provocative and idealized portrayals of the female form against vibrant backgrounds. Wesselmann's use of flat colors, simplified forms, and erotic themes distinguished him as a unique voice within the pop art movement.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

     

    </div>
  );
}

export default Artists;
