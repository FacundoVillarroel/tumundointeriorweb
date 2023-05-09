import React, { useState } from 'react';
import {BiXCircle} from "react-icons/bi";
import {FaGraduationCap} from "react-icons/fa"

const SeeMore = ({closeSeeMore}) => {
  const [isClosed, setIsClosed ] = useState(false)

  const closeAnimation = async () => {
    setIsClosed(true)

    setTimeout(() => {
      closeSeeMore();
    }, 1000);
  }
  
  return (
    <div className={`seeMoreContainer ${isClosed ? "seeMoreClosed" : ""}`} id='seeMoreContainer'>
      <div className="closeBtn" onClick={closeAnimation}>
        <BiXCircle fontSize={25}/>
      </div>
      <h2>
        Tú mundo interior 
      </h2>
      <h3>
        Experiencia profesional y formación académica
      </h3>
      <div className='teamDescriptionContainer'>
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            El equipo del centro de psicoterapia <span className="dosisItalic">Tu Mundo Interior</span> cuenta con 5 y 15 años de experiencia respectivamente, en atención de pacientes en consultorio particular, desde el <span className='dosisBold'>Modelo de Psicoterapia Cognitivo - Posracionalista.</span>
          </p>
        </div>
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            Acreditación Nacional como Especialista en Psicoterapia por la Comisión Nacional de Psicólogos Clínicos (CONAPC).
          </p>
        </div>
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            Experiencia <span className='dosisBold'>docente</span> en cátedras en el área de <span className='dosisBold'>formación en psicología clínica y psicoterapia</span> en la Carrera de Psicología en distintas universidades del país, en pregrado y posgrado, así como también realización de formación y <span className='dosisBold'>supervisión clínica</span> a psicólogos que se encuentran titulados.
          </p>
        </div>
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Acreditación Internacional por la Federación Latinoamericana de Psicoterapia</span> (FLAPSI), avalado por <span className='dosisBold'>World Council for Psychotherapy</span> (WCP).
          </p>
        </div>
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            El equipo cuenta con la siguiente formación académica posterior a la obtención de la licenciatura y titulación en psicología:
          </p>
        </div>
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Investigaciones científicas</span> y artículos en el área de la psicología clínica y psicoterapia.
          </p>
        </div>
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Posgrado de Magíster</span> en Psicología Clínica, con Mención en Psicoterapia Constructivista y Construccionista en la Universidad de Valparaíso.
          </p>
        </div>
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Apariciones en distintos medios de comunicación</span> (radio, televisión y escritos) nacionales e internacionales, dando entrevistas acerca de la psicología y temas contingentes del país.
          </p>
        </div>
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Postítulo en Psicología Forense</span> en la Pontificia Universidad Católica de Chile (PUC).
          </p>
        </div>
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Exposiciones en seminarios y congresos</span> en temas de psicología clínica y psicoterapia.
          </p>
        </div>
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Postítulo (c) en Psicoterapia Cognitivo - Posracionalista</span> en el Centro de Psicoterapia Posracionalista CETEPO (Roma, Italia).
          </p>
        </div>
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            Participación en <span className='dosisBold'>grupos de estudios, supervisiones clínicas</span> y diversos cursos, seminarios y <span className='dosisBold'>congresos de especialización</span> en el área de la psicología clínica, <span className='dosisBold'>psicoterapia y docencia.</span>
          </p>
        </div>
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Diplomado</span> (nivel avanzado) en la actualización de la teoría y la 
            aplicación del método y técnicas de la Psicoterapia Cognitivo Posracionalista, en el Centro de Psicoterapia Posracionalista CETEPO (Santiago, Chile).
          </p>
        </div>
        <div className='teamDescriptionItemContainer'>
          <div className='teamDescriptionItem'>
            <FaGraduationCap fontSize={25} color={"a38f85"}/>
          </div>
          <p className='teamDescriptionText'>
            <span className='dosisBold'>Membresía Colegio de Psicólogos de Chile y Sociedad Chilena de Psicología Clínica y Psicoterapia</span> (SCPC).
          </p>
        </div>
      </div>
    </div>
  )
}

export default SeeMore