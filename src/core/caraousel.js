import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: require("./helper/categoriesp/carousel3 (1).jpg"),
    // caption: "Caption",
    // description: "Description Here",
  },
  {
    image: require("./helper/categoriesp/carousel2 (1).jpg"),
    // caption: "Caption",
    // description: "Description Here",
  },
  {
    image: require("./helper/categoriesp/carousel1.jpeg"),
    // caption: "Caption",
    // description: "Description Here",
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-50  "
              src={slide.image}
              alt="slider image"
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default HomeCarousel;
