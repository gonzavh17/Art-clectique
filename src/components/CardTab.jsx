import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

export default function App() {
  let tabs = [
    {
      id: "styles",
      label: "Styles",
      content: ` Dive into the variety and vibrant expression of pop art through its
      different styles. From iconic representations of popular culture to
      dynamic abstractions and social reflections, discover how pop art has
      evolved to encompass a wide range of artistic approaches. Explore each
      unique style and immerse yourself in the creative energy of the pop
      art movement in all its forms.`
    },
    {
      id: "music",
      label: "Fun Fact",
      content: `Some pop art works, such as Claes Oldenburg's oversized sculptures of everyday objects like hamburgers and typewriters, were intended to provoke a sense of wonder and absurdity, inviting viewers to reconsider the objects of their everyday lives.`
    },
    {
      id: "videos",
      label: "Did you l",
      content: "Did you know? Pop art emerged as a response to the consumerism and mass production of the post-war era, challenging traditional notions of fine art and blurring the boundaries between high and low culture."
    }
  ];

  return (
    <div className="lg:w-1/3 flex flex-col tab-parent justify-center items-center">

      <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs>
    </div>  
  );
}