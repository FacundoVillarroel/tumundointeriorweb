import React from 'react';

const NavBar = () => {

  return (
    <div className='navBarContainer'>
      <div className='navBarLinksContainer'>
        <a href='/#' className='navBarLink linkSeparator'>Inicio</a>
        <a href='/preguntas-frecuentes' className='navBarLink linkSeparator'>Preguntas Frecuentes</a>
        <a href='/#' className='navBarLink'>Contacto</a>
      </div>
      <a href='/' className='navBarTitleContainer'>
        <h1 className='navBarTitle'> Tu Mundo Interior</h1>
        <p className='navBarSubTitle'>Centro de Psicoterapia Online</p>
      </a>
      <div className='navBarLinksContainer'>
        <a href='/#' className='navBarLink linkSeparator'>Quienes Somos</a>
        <a href='/perfil' className='navBarLink linkSeparator'>Blog</a>
        <a href='/contacto' className='navBarLink'>Agenda tu hora</a>
      </div>
    </div>
  )
}

export default NavBar