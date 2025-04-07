import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return(
    <section className="skill" id="skills">
    <Container>
      <Row>
        <Col>
          <div className="skill-bx">
            <h2> Skills</h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              deleniti quam magnam molestiae expedita praesentium tempore, culpa
              dicta laboriosam, impedit, eaque sit eligendi voluptatem voluptate
              pariatur! Aliquid blanditiis voluptatum ullam.
            </p>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="skill-slider"
            >
                <div className="item">
                    <img src="assets/meter1.svg" alt="Image" />
                    <h5>Web Development</h5>
                </div>
                <div className="item">
                    <img src="assets/meter2.svg" alt="Image" />
                    <h5>JavaScript</h5>
                </div>
                <div className="item">
                    <img src="assets/meter3.svg" alt="Image" />
                    <h5>React.js</h5>
                </div>
                <div className="item">
                    <img src="assets/meter1.svg" alt="Image" />
                    <h5>Next.js</h5>
                </div>
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
    <img className="background-image-left" src="assets/color-shartp.png" alt="" />
  </section>
  );
  
};

export default Skills;
