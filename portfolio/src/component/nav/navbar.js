import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './navbar.css';

function Navbarr() {
  return (
    <Navbar expand="lg" className=" fixed-top navbar_heder">
      <Container fluid>
      <div className='navbar_left'>
           <h1>Develop<span>er</span></h1>
         </div>

        <Navbar.Toggle />
        <Navbar.Collapse >
          <Nav
            className="nav_inside_content me-auto my-2 my-lg-0 justify-content-center gap-3 flex-grow-1 pr-3"
            
          >
                <Nav.Link href="#home" smooth={true} duration={500} className="text-warning">
                <h4>home</h4>
             </Nav.Link>
             <Nav.Link href="#about" smooth={true} duration={500}>
                <h4>about</h4>
             </Nav.Link>
             <Nav.Link href="#skills" smooth={true} duration={500}>
                <h4>skills</h4>
             </Nav.Link>
             <Nav.Link href="#education" smooth={true} duration={500}>
                <h4>education</h4>
             </Nav.Link>
            
            <Nav.Link href="#projects" smooth={true} duration={500}>
                 <h4> Projects</h4>
            </Nav.Link>

            <Nav.Link href="#contact" smooth={true} duration={500}>
                <h4>Contacts</h4>
            </Nav.Link>
           
          </Nav>
        
         
           
            <div className="d-flex">
            <a href="image\POORANI.pdf" download class="nav_btn"> Download CV <i class="fa-solid fa-download"></i></a>
          
            </div>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
