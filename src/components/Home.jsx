import { useRef } from 'react';
import CustomNav from './NavBar';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import DeveloperSvg from '../utils/developerSvg';
import Particles from '../utils/particles';
import { profile } from '../content';
import About from './About';
import TechText from './TechText';
import DecryptedText from './DecryptedText';
import SkillsGraph from './SkillsGraph';

const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: faGithubSquare },
  { label: 'LinkedIn', href: profile.linkedin, icon: faLinkedin },
];

export default function Home() {
  const [tagline, punchline] = profile.tagline;
  const hero = useRef(null);

  return (
    <>
      <CustomNav />
      <main>
        <section ref={hero} className="home-hero" aria-label="Introduction">
          <Particles />
          <Container className="home-container">
            <Row xs={1} md={2}>
              <Col className="my-auto">
                <p className="color-custom-grey font-weight-bold mb-0 hero-greeting">Hey!!</p>
                <h1 className="color-name-blue hero-name">
                  <span className="hero-name-prefix">I'm</span>{' '}
                  <span className="hero-name-word">
                    <span className="hero-name-text">{profile.name}</span>
                    <span className="hero-name-motion" aria-hidden="true">
                      <TechText text={profile.name} align="left" fontSize={72} fontWeight={800} letterSpacing={-0.035} />
                    </span>
                  </span>
                </h1>
                <p className="color-custom-grey h5 font-weight-bold mb-4">
                  <DecryptedText text={profile.role} animateOn="inViewHover" sequential speed={45} hoverRadius={48} scrambleColor="#11685e" encryptedClassName="role-encrypted" loop loopDelay={4700} />
                </p>
                <p className="hero-tagline">
                  <span>{tagline}</span>{' '}
                  <span className="hero-tagline-punchline">{punchline}</span>
                </p>
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
        </section>
        <SkillsGraph hero={hero} />
        <About />
      </main>
    </>
  );
}
