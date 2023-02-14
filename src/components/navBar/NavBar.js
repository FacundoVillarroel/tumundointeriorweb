import React from 'react';

const NavBar = () => {

  return (
    <div className='navBarContainer'>
      <div className='navBarLinksContainer'>
        <a href='/#' className='navBarLink linkSeparator'>posuere</a>
        <a href='/#' className='navBarLink linkSeparator'>mauris</a>
        <a href='/#' className='navBarLink'>eleifend</a>
      </div>
      <a href='/' className='navBarTitleContainer'>
        <h1 className='navBarTitle'> Tu Mundo Interior</h1>
        <p className='navBarSubTitle'>Magdalena y Jorge</p>
      </a>
      <div className='navBarLinksContainer'>
        <a href='/#' className='navBarLink linkSeparator'>posuere</a>
        <a href='/#' className='navBarLink linkSeparator'>Quienes Somos</a>
        <a href='/#' className='navBarLink'>Contacto</a>
      </div>
    </div>
  )
}

export default NavBar