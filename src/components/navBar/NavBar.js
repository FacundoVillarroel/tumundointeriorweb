import React from 'react';

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
    <div className={blur ? 'navBarContainer blur' : "navBarContainer"}>
      <div className='navBarLinksContainer'>
        <a href='/' className='navBarLink linkSeparator'>Inicio</a>
        <a href='/preguntas-frecuentes' className='navBarLink linkSeparator'>Preguntas Frecuentes</a>
        <div href='/#' className='navBarLink openContactBtn1' onClick={() =>toggleSidebar("contacto")}>Contacto</div>
      </div>
      <a href='/' className='navBarTitleContainer'>
        <h1 className='navBarTitle'> Tu Mundo Interior</h1>
        <p className='navBarSubTitle'>Centro de Psicoterapia Online</p>
      </a>
      <div className='navBarLinksContainer'>
        <a href='/#quienes' onClick={() => scrollToElement("quienesSomos", 80)} className='navBarLink linkSeparator'>Quiénes Somos</a>
        <a href='/blog' className='navBarLink linkSeparator'>Blog</a>
        <div href='/#' className='navBarLink openBookingBtn' onClick={() => toggleSidebar("agenda")}>Agenda tu hora</div>
      </div>
    </div>
  )
}

export default NavBar