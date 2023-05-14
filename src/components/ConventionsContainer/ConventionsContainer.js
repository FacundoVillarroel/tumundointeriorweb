import React from 'react';
import {BiXCircle} from "react-icons/bi";
import {GrMoney} from "react-icons/gr";
import {FaHourglassHalf , FaHeartbeat} from "react-icons/fa";

import consaludImage from "../../images/consaludImage.png";
import colmenaImage from "../../images/colmenaImage.png";
import cruzblancaImage from "../../images/cruzblancaImage.png";
import vidatresImage from "../../images/vidatresImage.png";
import masvidaImage from "../../images/masvidaImage.png";
import banmedicaImage from "../../images/banmedicaImage.png";

const ConventionsContainer = ({closeAnimation, className}) => {

  return (
    <div className={`conventionsContainer , ${className}`}>
      <div className="closeBtn" onClick={closeAnimation}>
        <BiXCircle fontSize={25}/>
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
          <p>35.000 CL, pago por transferencia bancaria - 45 US más comisión, pago a través de PayPal.</p>
        </div>
        <div className='itemContainer'>
          <FaHourglassHalf fontSize={25} color={"a38f85"} />
          <p>La duración de cada sesión psicoterapéutica va desde los 50 a 60 minutos</p>
        </div>
        <div className='itemContainer'>
          <FaHeartbeat fontSize={25} color={"a38f85"} />
          <p>Contamos con convenios con todas las Isapres del país y seguros de salud complementarios.</p>
        </div>
        <div className='isapresContainer'>
          <a href='http://www.consalud.cl/'>
            <img src={consaludImage} alt="Consalud Logo"/>
          </a>
          <a href='http://www.colmena.cl/'>
            <img src={colmenaImage} alt='Colmena Logo'/>
          </a>
          <a href='https://www.cruzblanca.cl/'>
            <img src={cruzblancaImage} alt='Cruz Blanca Logo'/>
          </a>
          <a href='http://www.vidatres.cl/'>
            <img src={vidatresImage} alt='Vida Tres Logo'/>
          </a>
          <a href='http://www.nuevamasvida.cl/'>
            <img src={masvidaImage} alt='Más Vida Logo'/>
          </a>
          <a href='https://www.banmedica.cl/'>
            <img src={banmedicaImage} alt='Ban Medica Logo'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ConventionsContainer