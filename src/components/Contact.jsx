import CustomNav from "./NavBar";
import { Container, Button, Row, Col, CardDeck, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { profile } from "../content";
import ContactSvg from "../utils/contactSvg";

const contactDetails = [
  { type: 'Email', label: 'Email', data: profile.email, href: `mailto:${profile.email}`, iconSrc: '/static/icons/gmail.svg', icon: faEnvelope },
  { type: 'LinkedIn', label: 'LinkedIn', data: profile.linkedin, href: profile.linkedin, iconSrc: '/static/icons/linkedin.svg', icon: faLinkedinIn },
  { type: 'Contact number', label: 'Phone', data: profile.phone, href: `tel:${profile.phone}`, iconSrc: '/static/icons/phone.png', icon: faPhoneAlt },
].filter(contact => contact.data);

const Contact = () => {

  return (
    <>
      <CustomNav />
      <Container className="pt-lg-3">
        <Row className="mt-3 mt-lg-4 mb-3">
          <Col xs={12} md={9}>
            {contactDetails.length === 0 && <p>Contact details coming soon.</p>}
            <CardDeck className="contact">
              {contactDetails.map(obj => (
                <Card className="contact-card" key={obj.type}>
                  <a href={obj.href} className="text-link" target="_blank" rel="noreferrer">
                    <div className="shadow d-flex justify-content-center text-center flex-column py-3">
                      <div>
                        <img className="contact-img" src={obj.iconSrc} alt={obj.type} loading="lazy" />
                      </div>
                      <span className="text-muted mt-2 mb-3">{obj.type}</span>
                      <span className="color-custom-blue">{obj.type === 'LinkedIn' ? profile.name : obj.data}</span>
                    </div>
                  </a>
                </Card>
              ))}
            </CardDeck>
          </Col>
          <Col className="float-md-right text-right">
            <h2 className="pr-lg-5 pr-xs-3 text-boldest color-custom-blue mb-4">
              Let's <br />Work <br /> Together!
            </h2>
            <div className="mt-3 mb-3 pr-lg-5 pr-xs-3">
              {contactDetails.map(contact => (
                <Button key={contact.type} className="contact-btns bg-custom-blue mr-2 shadow border-0 py-1" href={contact.href} aria-label={contact.label}>
                  <FontAwesomeIcon size="1x" icon={contact.icon} /><span>{contact.label}</span>
                </Button>
              ))}
            </div>
          </Col>
        </Row>
        <ContactSvg />
      </Container>
    </>
  )
};

export default Contact;
