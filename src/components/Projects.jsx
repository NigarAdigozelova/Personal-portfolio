import React from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: "/assets/project-img1.png",
    },
    {
      title: "Business Startup1",
      description: "Design & Development",
      imgUrl: "/assets/project-img2.png",
    },
    {
      title: "Business Startup2",
      description: "Design & Development",
      imgUrl: "/assets/project-img3.png",
    },
    {
      title: "Business Startup3",
      description: "Design & Development",
      imgUrl: "/assets/project-img1.png",
    },
    {
      title: "Business Startup4",
      description: "Design & Development",
      imgUrl: "/assets/project-img2.png",
    },
    {
      title: "Business Startup5",
      description: "Design & Development",
      imgUrl: "/assets/project-img3.png",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
              asperiores optio molestias explicabo inventore doloremque, odit
              nobis nihil debitis quis reprehenderit repellendus modi incidunt
              similique minima facilis, magni nisi impedit.
            </p>
            <Tab.Container className="projects-tab" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              {/* <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCards key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.map((project, index) => {
                      return <p>3{project.title}</p>;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content> */}
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.slice(0, 6).map((project, index) => (
                      <ProjectCards key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.slice(2, 5).map((project, index) => (
                      <ProjectCards key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.slice(3, 6).map((project, index) => (
                      <ProjectCards key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src="/assets/color-sharp2.png"
        alt=""
      />
    </section>
  );
};

export default Projects;
