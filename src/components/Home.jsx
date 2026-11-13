import CustomNav from './NavBar';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import DeveloperSvg from '../utils/developerSvg';
import Particles from '../utils/particles';
import { profile } from '../content';
import About from './About';

const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: faGithubSquare },
  { label: 'LinkedIn', href: profile.linkedin, icon: faLinkedin },
];

export default function Home() {
  return (
    <>
      <CustomNav />
      <Container className="h-100 home-container" role="main">
        <Row xs={1} md={2} className="h-100">
          <Col className="my-auto">
            <h5 className="color-custom-grey font-weight-bold mb-0">Hey!</h5>
            <h1 className="color-name-blue text-boldest">I'm {profile.name}</h1>
            <p className="color-custom-grey h4">{profile.role}</p>
            <div className="d-flex my-4">
              {socialLinks.filter(link => link.href).map(link => (
                <Button key={link.label} variant="" className="color-custom-blue p-0 mr-3 border-0" aria-label={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon size="2x" icon={link.icon} />
                </Button>
              ))}
            </div>
            {profile.resume && (
              <Button className="bg-custom-blue font-weight-bold shadow-sm border-0 resume-btn" href={profile.resume} target="_blank" rel="noopener noreferrer">View Resume</Button>
            )}
          </Col>
          <Col className="w-100 my-auto d-none d-md-block">
            <DeveloperSvg />
          </Col>
        </Row>
      </Container>
      <Particles />
      <About />
    </>
  );
}
