// function HomeCarousel() {
//   const [index, setIndex] = useState(0);
//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       {data.map((slide, i) => {
//         return (
//           <Carousel.Item>
//             <img
//               className="d-block w-50  "
//               src={slide.image}
//               alt="slider image"
//             />
//             <Carousel.Caption>
//               <h3>{slide.caption}</h3>
//               <p>{slide.description}</p>
//             </Carousel.Caption>
//           </Carousel.Item>
//         );
//       })}
//     </Carousel>
//   );
// }
// export default HomeCarousel;

import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const data = [
  {
    image: require("./helper/categoriesp/carousel3 (1).jpg"),
    //   caption: "Caption",
    //   description: "Description Here",
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

  const isMobile = window.innerWidth <= 768;
  const itemsToShow = isMobile ? 1 : 3;
  const imageSize = isMobile ? "100%" : "50%";

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={5000}
      pause={false}
      touch={true}
      slide={true}
      fade={false}
      indicators={false}
      nextLabel=""
      prevLabel=""
      nextIcon={
        <span aria-hidden="true" className="carousel-control-next-icon" />
      }
      prevIcon={
        <span aria-hidden="true" className="carousel-control-prev-icon" />
      }
    >
      {data.map((slide, i) => {
        return (
          <Carousel.Item key={i}>
            <img
              className="d-block mx-auto"
              src={slide.image}
              alt="slider image"
              style={{ width: imageSize }}
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
