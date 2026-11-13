import { Container, Row, Col } from 'react-bootstrap';
import { experience, profile } from '../content';
import Timeline from '../utils/timeline';

export default function About() {
  return (
    <Container className="mt-2 mr-lg-5" fluid>
      <Row xs={1} md={2}>
        <Col className="mb-3">
          {experience.length > 0 && <Timeline />}
        </Col>
        <Col className="px-lg-5 mb-2">
          <div className="px-lg-5 about-text">
            <h2 className="about-me-block">About</h2>
            {profile.bio && <p>{profile.bio}</p>}
          </div>
          <div className="text-center mt-5">
            <img src="/static/images/programmer.svg" alt="" className="programmer" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
