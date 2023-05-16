import React, { useState, useEffect, useRef, useCallback } from 'react';
import {BiXCircle} from "react-icons/bi";
import {RiUserHeartLine, RiUserSettingsLine} from "react-icons/ri";
import {TbAward } from "react-icons/tb";
import {FaGraduationCap} from "react-icons/fa";
import {RxDot} from "react-icons/rx";

const SeeMore = ({closeSeeMore}) => {
  const seeMoreRef = useRef(null);
  const [isClosed, setIsClosed ] = useState(false);

  const closeAnimation = useCallback(async () => {
    setIsClosed(true);
    setTimeout(() => {
      closeSeeMore();
    }, 1000);
  }, [closeSeeMore]);

  useEffect(() => {
    const handleClickOutsideSeeMore = (event) => {
      const button1 = document.querySelector('.openSeeMoreBtn1');
      const button2 = document.querySelector('.openSeeMoreBtn2');
      console.log("button 1:",button1,"button2",button2);
      if  ( seeMoreRef.current && 
            !seeMoreRef.current.contains(event.target) && 
            (button1 && !button1.contains(event.target)) &&
            (button2 && !button2.contains(event.target))
          ) {
        // Clicked outside .seeMoreContainer and outside the buttons to open it
        closeAnimation();
      }
    };
    document.addEventListener('click', handleClickOutsideSeeMore);
    return () => {
      document.removeEventListener('click', handleClickOutsideSeeMore);
    };
  }, [closeAnimation]);
  
  return (
    <div ref={seeMoreRef} className={`seeMoreContainer ${isClosed ? "seeMoreClosed" : ""}`} id='seeMoreContainer'>
      <div className="closeBtn" onClick={closeAnimation}>
        <BiXCircle fontSize={25}/>
      </div>
      <h2>
        Tu mundo interior 
      </h2>
      <h3>
        Experiencia profesional y formación académica
      </h3>
      <div className='teamDescriptionContainer'>
        
        {/* 1 */}
        
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <RiUserHeartLine fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            El equipo del centro de psicoterapia <span className="dosisItalic">Tu Mundo Interior</span> cuenta con <span className='dosisBold'>5 y 15 años de experiencia</span> respectivamente, en atención de pacientes en consulta particular, desde el Modelo de <span className='dosisBold'>psicoterapia cognitivo - posracionalista.</span>
          </p>
        </div>

        {/* 2 */}
        
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <RxDot fontSize={25} color={"ede9e3"}/>
          </div>
          <p className='teamDescriptionText'>
            El equipo cuenta con la siguiente <span className='dosisBold'>formación académica</span> posterior a la obtención de la licenciatura y titulación en psicología:
          </p>
        </div>
        
        {/* 3 */}
        
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <RiUserSettingsLine fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            Experiencia <span className='dosisBold'>docente</span> en cátedras en el área de <span className='dosisBold'>formación</span> en <span className='dosisBold'>psicología clínica y psicoterapia</span> en la carrera de psicología en distintas universidades del país, en pregrado y posgrado, así como también formación y <span className='dosisBold'>supervisión clínica</span> a psicólogos que se encuentran titulados.
          </p>
        </div>
        
        {/* 4 */}

        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Posgrado</span> de <span className='dosisBold'>magíster</span> en psicología clínica, con mención en psicoterapia <span className='dosisBold'>constructivista</span> y <span className='dosisBold'>construccionista</span> en la Universidad de Valparaíso <span className='dosisBold'>(UV).</span>
          </p>
        </div>
        
        {/* 5 */}
        
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <TbAward  fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Acreditación nacional</span> como <span className='dosisBold'>especialista en psicoterapia</span> por la Comisión Nacional de Psicólogos Clínicos <span className="dosisBold">(CONAPC).</span>
          </p>
        </div>
        
        {/* 6 */}

        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
          <span className='dosisBold'>Postítulo</span> de <span className='dosisBold'>psicología</span> en la Pontificia Universidad Católica de Chile <span className='dosisBold'>(PUC).</span>
          </p>
        </div>
        
        {/* 7 */}
        
        
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <TbAward  fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Acreditación internacional</span> como <span className='dosisBold'>especialista en psicoterapia</span> por la Federación Latinoamericana de Psicoterapia <span className='dosisBold'>(FLAPSI)</span>, avalado por World Council for Psychotherapy<span className='dosisBold'>(WCP).</span>
          </p>
        </div>
        
        {/* 8 */}
        
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Postítulo</span> en <span className='dosisBold'>psicoterapia cognitiva - posracionalista</span> en el Centro de Psicoterapia Posracionalista <span className='dosisBold'>CETEPO (Roma, Italia).</span>
          </p>
        </div>
        
        {/* 9 */}
        
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <TbAward fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            Membresía <span className='dosisBold'>Colegio de Psicólogos de Chile</span> y <span className='dosisBold'>Sociedad Chilena de Psicología Clínica y Psicoterapia (SCPC).</span>
          </p>
        </div>
        
        {/* 10 */}
        
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Diplomado</span> en <span className='dosisBold'>psicoterapia cognitiva - posracionalista</span>, en el Centro de Psicoterapia Posracionalista <span className='dosisBold'>CETEPO (Santiago, Chile).</span>
          </p>
        </div>

        
        {/* 11 */}

        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <TbAward fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Exposiciones en seminarios y congresos</span> en temas de psicología clínica y psicoterapia.
          </p>
        </div>
        
        {/* 12 */}
        
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Investigaciones científicas</span> y artículos en el área de la psicología clínica y psicoterapia.
          </p>
        </div>
        
      </div>
    </div>
  )
}

export default SeeMore