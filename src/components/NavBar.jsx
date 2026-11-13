import { profile } from '../content';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function CustomNav() {
  return (
    <Navbar className="nav-color nav-slide">
      <Link className="text-decoration-none portfolio-signature" to="/">
        {`< ${profile.name} />`}
      </Link>
    </Navbar>
  );
}
