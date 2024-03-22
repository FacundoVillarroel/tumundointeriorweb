import React, { useState } from 'react';
import {FiMenu} from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const NavBar = ({toggleSidebar, blur}) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const scrollToElement = (id, offset) => {
    setNavbarOpen(false)
    const element = document.getElementById(id);
    const offsetTop = element.offsetTop - offset - 18;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    }); 
  }

  const navBarClose = ( content ) => {
    setNavbarOpen(false)
    if (content === "contacto" || content === "agenda") toggleSidebar(content);
  }

  const navbarToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <div className={`navBarContainer ${blur ? "blur" : null}`}>
      <div className={`linksContainer ${navbarOpen ? "linksOpen" : null} A`}>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/#quienes" onClick={() => scrollToElement("quienesSomos", 80)}>Quiénes Somos</NavLink>
        <NavLink to="/preguntas-frecuentes">Preguntas Frecuentes</NavLink>
      </div>
      <NavLink to="/" className='navBarTitleContainer'>
        <h1 className='navBarTitle'> Tu Mundo Interior</h1>
        <p className='navBarSubTitle'>Centro de Psicoterapia Online</p>
      </NavLink>
      <div className={`linksContainer ${navbarOpen ? "linksOpen" : null} B`}>
        <NavLink to="/blog">Blog</NavLink>
        <button onClick={() =>navBarClose("contacto")} className="openContactBtn1">Contacto</button>
        <button onClick={() => navBarClose("agenda")} className="openBookingBtn">Agenda tu hora</button>
      </div>
      <div className='navBarToggler' onClick={navbarToggle}><FiMenu className='menuIcon'/></div>
    </div>
  )
}

export default NavBar