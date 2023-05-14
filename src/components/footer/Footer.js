import React from 'react';
import {MdOutlineCopyright} from "react-icons/md";

const Footer = ({toggleSidebar, toggleConventions}) => {
  return (
    <div className='footerContainer'>
      <div className='footerTextContainer'>
        <h4 className='footerText'>Para mayor información y/o consulta, no dudes en contactarnos.</h4>
        <div className='footerButtonContainer' onClick={() =>toggleSidebar("contacto")}>
          <h4 className='footerButtonText'>Enviar un mensaje</h4>
        </div>
      </div>
      <div className='footerConventionsContainer'>
        <div className='footerButtonContainer' onClick={() =>toggleConventions()}>
          <h4 className='footerButtonText'>Valores y convenios</h4>
        </div>
      </div>
      <div className='footerCopyrightContainer'>
        <MdOutlineCopyright fontSize={12} />
        <h4>
          2023, Chile | Centro de psicoterapia Tu Mundo Interior 
        </h4>
      </div>
    </div>
  )
}

export default Footer