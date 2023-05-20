import React from 'react';
import {MdOutlineCopyright} from "react-icons/md";

const Footer = ({toggleSidebar, openConventions}) => {
  return (
    <div className='footerContainer'>
      <div className='footerTextContainer'>
        <h4 className='footerText'>Para mayor información y/o consulta, no dudes en contactarnos.</h4>
        <div>
          <div className='footerButtonContainer openContactBtn2' onClick={() =>toggleSidebar("contacto")}>
            <h4 className='footerButtonText'>Enviar un mensaje</h4>
          </div>
          <div className='footerButtonContainer openConventionsBtn' onClick={() =>openConventions()}>
            <h4 className='footerButtonText'>Valores y convenios</h4>
          </div>
        </div>
      </div>
      <div className='footerCopyrightContainer'>
        <MdOutlineCopyright fontSize={12} />
        <h4>
          2023, Chile | Centro de psicoterapia Tu Mundo Interior.
        </h4>
      </div>
    </div>
  )
}

export default Footer