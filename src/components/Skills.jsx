import { lazy, Suspense } from "react";
import CustomNav from "./NavBar";
import { Container, Row, Col, Spinner, Carousel } from "react-bootstrap";
import { skills, certificates } from "../content";

const SkillsBarChart = lazy(() => import("../utils/barChart"));
const IconCard = lazy(() => import("../utils/iconCard"));

const categories = skills.map(skill => skill.label);
const barData = skills.map((skill, index) => ({
  name: skill.label,
  data: skills.map((_, position) => position === index ? skill.rating : 0),
}));

const Skills = () => {
  return (
    <>
      <CustomNav />
      <Container className="mt-5">
        {skills.length === 0 && <p>Skills coming soon.</p>}
        <Suspense fallback={<div className="d-flex justify-content-center mt-5"><Spinner animation="border" variant="secondary" /></div>}>
          <Row xs={1} md={2}>
            <Col>
              <div className="py-3">
                {barData.length > 0 &&
                  <SkillsBarChart skillsData={barData} skills={categories} />
                }
              </div>
            </Col>
            <Col className="skill-icons-container">
              <Row className="justify-content-evenly">
                {skills.filter(skill => skill.src).map(skill => (
                  <IconCard key={skill.label} src={skill.src} label={skill.label} />
                ))}
              </Row>
            </Col>
          </Row>
          {certificates.length > 0 && <Row className="d-flex justify-content-center mt-3 mb-5">
            <Col md={5} xs={12}>
              <Carousel variant="dark">
                {certificates.map(cert => (
                  <Carousel.Item key={cert.src} interval={1500}>
                    <a href={cert.href} target="_blank" rel="noreferrer">
                      <img className="d-block w-100" src={cert.src} alt={cert.label} loading="lazy" />
                    </a>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>}
        </Suspense>
      </Container>
    </>
  )
};

export default Skills;
