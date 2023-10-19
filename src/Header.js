import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './assets/images/Logo .svg';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">HOME</Nav.Link>
            <Nav.Link href="#">ABOUT</Nav.Link>
            <Nav.Link href="#">MENU</Nav.Link>
            <Nav.Link href="#">RESERVATIONS</Nav.Link>
            <Nav.Link href="#">ORDER ONLINE</Nav.Link>
            <Nav.Link href="#">LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;