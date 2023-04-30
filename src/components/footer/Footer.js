import React from 'react';

const Footer = ({toggleSidebar}) => {
  return (
    <div className='footerContainer'>
      <h4 className='footerText'>Para mayor información y/o consulta, escríbenos.</h4>
      <div className='footerButtonContainer' onClick={() =>toggleSidebar("contacto")}>
        <h4 className='footerButtonText'>Enviar un mensaje</h4>
      </div>
    </div>
  )
}

export default Footer