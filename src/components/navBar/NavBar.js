import React, { useState } from 'react';
import {FiMenu} from "react-icons/fi";

const NavBar = ({toggleSidebar, blur}) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const scrollToElement = (id, offset) => {
    const element = document.getElementById(id);
    const offsetTop = element.offsetTop - offset;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    }); 
  }

  const navbarToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <div className={`navBarContainer ${blur ? "blur" : null}`}>
      <div className={`linksContainer ${navbarOpen ? "linksOpen" : null} A`}>
        <a href="/">Inicio</a>
        <a href="/#quienes" onClick={() => scrollToElement("quienesSomos", 80)}>Quiénes Somos</a>
        <a href="/preguntas-frecuentes">Preguntas Frecuentes</a>
      </div>
      <a href="/" className='navBarTitleContainer'>
        <h1 className='navBarTitle'> Tu Mundo Interior</h1>
        <p className='navBarSubTitle'>Centro de Psicoterapia Online</p>
      </a>
      <div className={`linksContainer ${navbarOpen ? "linksOpen" : null} B`}>
        <a href="/blog">Blog</a>
        <button onClick={() =>toggleSidebar("contacto")} className="openContactBtn1">Contacto</button>
        <button onClick={() => toggleSidebar("agenda")} className="openBookingBtn">Agenda tu hora</button>
      </div>
      <div className='navBarToggler' onClick={navbarToggle}><FiMenu className='menuIcon'/></div>
    </div>
  )
}

export default NavBar