import CustomNav from "./NavBar";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { projects } from "../content";

const Projects = () => {
  return (
    <>
      <CustomNav />
      <Container className="mt-5">
        <h2 className="color-custom-blue ml-lg-5 proj-slide">Projects</h2>
        {projects.length === 0 && <p className="ml-lg-5">Projects coming soon.</p>}
        {projects.map(proj => (
          <Row className="my-5 px-md-5 proj-opacity" xs={1} md={2} key={proj.label}>
            <Col>
              {proj.imgSrc && <img className="img-fluid proj-image shadow" src={proj.imgSrc} alt={proj.label} loading="lazy" /> }
            </Col>
            <Col className="pt-2">
              <h3 className="font-weight-bold color-custom-blue mb-0">{proj.label}</h3><br />
              {proj.description && <>
                <span>{proj.description}</span><br />
              </>}
              {proj.src && <>
                Demo: <a href={proj.src} target="_blank" rel="noopener noreferrer">{proj.src}</a><br /><br />
              </>}
              {proj.githubSrc && <>
                Source code: <a href={proj.githubSrc} target="_blank" rel="noopener noreferrer">{proj.githubSrc}</a><br />
              </>}
              <div className="mt-2">
                {proj.stack?.map(obj => <Badge key={obj} pill variant="secondary" className="mr-1">{obj}</Badge>)}
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  )
};

export default Projects;
