import React,{ useEffect, useRef} from 'react';

import {BiXCircle} from "react-icons/bi";
import {GrMoney} from "react-icons/gr";
import {FaHourglassHalf , FaHeartbeat} from "react-icons/fa";
import {BiWorld} from "react-icons/bi";

import consaludImage from "../../images/consaludImage.png";
import colmenaImage from "../../images/colmenaImage.png";
import cruzblancaImage from "../../images/cruzblancaImage.png";
import vidatresImage from "../../images/vidatresImage.png";
import masvidaImage from "../../images/masvidaImage.png";
import banmedicaImage from "../../images/banmedicaImage.png";

const ConventionsContainer = ({closeAnimation, className}) => {
  const conventionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideConventions = (event) => {
      const button = document.querySelector('.openConventionsBtn');
      if  ( conventionsRef.current && 
            !conventionsRef.current.contains(event.target) && 
            button &&
            !button.contains(event.target)
          ) {
        // Clicked outside .conventionsContainer and outside the button to open it
        closeAnimation();
      }
    };
    document.addEventListener('click', handleClickOutsideConventions);
    return () => {
      document.removeEventListener('click', handleClickOutsideConventions);
    };
  }, [closeAnimation]);

  return (
    <div ref={conventionsRef} className={`conventionsContainer , ${className}`}>
      <div className="closeBtn" onClick={closeAnimation}>
        <BiXCircle/>
      </div>
      <h2>
        Tu mundo interior 
      </h2>
      <h3>
        Valores y convenios
      </h3>
      <div className='conventionsDescriptionContainer'>
        <div className='itemContainer'>
          <GrMoney fontSize={25} className="icon"/>
          <p>35.000 CL, pago por transferencia bancaria <span className='dosisBold'>(pago nacional, Chile).</span></p>
        </div>
        <div className='itemContainer'>
          <BiWorld fontSize={25} color={"a38f85"}/>
          <p>45,00 USD pago a través de PayPal, más comisión <span className='dosisBold'>(pago internacional).</span></p>
        </div>
        <div className='itemContainer'>
          <FaHourglassHalf fontSize={25} color={"a38f85"} />
          <p>La duración de cada sesión psicoterapéutica va desde los <span className='dosisBold'>50 a 60 minutos.</span></p>
        </div>
        <div className='itemContainer'>
          <FaHeartbeat fontSize={25} color={"a38f85"} />
          <p><span className='dosisBold'>Convenios</span> con todas las <span className='dosisBold'>Isapres</span> del país y <span className='dosisBold'>seguros de salud</span> complementarios.</p>
        </div>
        <div className='isapresContainer'>
          <a href='http://www.consalud.cl/' target={"_blank"} rel={"noreferrer"}>
            <img src={consaludImage} alt="Consalud Logo"/>
          </a>
          <a href='http://www.colmena.cl/' target={"_blank"} rel={"noreferrer"}>
            <img src={colmenaImage} alt='Colmena Logo'/>
          </a>
          <a href='https://www.cruzblanca.cl/' target={"_blank"} rel={"noreferrer"}>
            <img src={cruzblancaImage} alt='Cruz Blanca Logo'/>
          </a>
          <a href='http://www.vidatres.cl/' target={"_blank"} rel={"noreferrer"}>
            <img src={vidatresImage} alt='Vida Tres Logo'/>
          </a>
          <a href='http://www.nuevamasvida.cl/' target={"_blank"} rel={"noreferrer"}>
            <img src={masvidaImage} alt='Más Vida Logo'/>
          </a>
          <a href='https://www.banmedica.cl/' target={"_blank"} rel={"noreferrer"}>
            <img src={banmedicaImage} alt='Ban Medica Logo'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ConventionsContainer