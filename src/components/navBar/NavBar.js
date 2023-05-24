import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({toggleSidebar, blur}) => {

  const scrollToElement = (id, offset) => {
    const element = document.getElementById(id);
    const offsetTop = element.offsetTop - offset;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    }); 
  }

  return (
    <Navbar expand="lg" fixed='top' bsPrefix ={blur ? "blur navbar" : "navbar"}>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/preguntas-frecuentes">Preguntas Frecuentes</Nav.Link>
          <Nav.Link href="#" onClick={() =>toggleSidebar("contacto")}><div className='openContactBtn1'>Contacto</div></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="/" >
        <div className='navBarTitleContainer'>
          <h1 className='navBarTitle'> Tu Mundo Interior</h1>
          <p className='navBarSubTitle'>Centro de Psicoterapia Online</p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/#quienes" onClick={() => scrollToElement("quienesSomos", 80)}>Quiénes Somos</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="#" onClick={() => toggleSidebar("agenda")}><div className='openBookingBtn'>Agenda tu hora</div></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar