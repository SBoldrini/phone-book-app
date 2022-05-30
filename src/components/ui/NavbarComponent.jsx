import { useDispatch, useSelector } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faAddressBook, faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import { startLogout } from '../../actions/auth';
import { uiOpenModal } from '../../actions/ui';


export const NavbarComponent = () => {

  const dispatch = useDispatch();
  const {name} = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  }

  const handleAddContact = () => {
    dispatch(uiOpenModal());
  }

  return (
    <Navbar className='sticky-md-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand className="text-info">
        <FontAwesomeIcon icon={faAddressBook} /> {name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={handleAddContact}
            >
              <FontAwesomeIcon icon={faAdd} /> Add Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              onClick={handleLogout}
            >
              <FontAwesomeIcon icon={faRightToBracket} /> Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
