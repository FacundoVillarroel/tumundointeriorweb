import React, { useState } from 'react';
import {BiXCircle} from "react-icons/bi";

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
      <h3>
        Tú mundo interior (formación académica y experiencia laboral) 
      </h3>
      <div className='parrafo'>
        <p>
          El equipo tiene 5 y 15 años de experiencia respectivamente, en atención de pacientes en consultorio particular, desde el Modelo de Psicoterapia Cognitivo - Posracionalista. 
        </p>
      </div>
      <div className='parrafo'>
        <p>
          Experiencia docente en cátedras en el área de formación en psicología clínica y psicoterapia en la Carrera de Psicología en distintas universidades del país, en pregrado y posgrado, así como también realización de formación y supervisión clínica a psicólogos que se encuentran titulados. 
        </p>
      </div>
      <div className='parrafo'>
        <p>
          El equipo tiene la siguiente formación académica posterior a la obtención de la licenciatura y titulación en psicología. 
        </p>
        <p>
          Posgrado de Magíster en Psicología Clínica, con Mención en Psicoterapia Constructivista y Construccionista en la Universidad de Valparaíso. 
        </p>
        <p>
          Postítulo en Psicología Forense en la Pontificia Universidad Católica de Chile (PUC). 
        </p>
        <p>
          Postítulo (c) en Psicoterapia Cognitivo - Posracionalista en el Centro de Psicoterapia Posracionalista CETEPO (Roma, Italia).
        </p>
        <p>
          Diplomado (nivel avanzado) en la actualización de la teoría y la aplicación del método y técnicas de la Psicoterapia Cognitivo Posracionalista, en el Centro de Psicoterapia Posracionalista CETEPO (Santiago, Chile). 
        </p>
      </div>
      <div className='parrafo'>
        <p>
          Acreditación Nacional como Especialista en Psicoterapia por la Comisión Nacional de Psicólogos Clínicos (CONAPC). 
        </p>
        <p>
          Acreditación Internacional por la Federación Latinoamericana de Psicoterapia (FLAPSI), avalado por World Council for Psychotherapy (WCP). 
        </p>
      </div>
      <div className='parrafo'>
        <p>
          Investigaciones científicas y artículos en el área de la psicología clínica y psicoterapia. 
        </p>
      </div>
      <div className='parrafo'>
        <p>
          Apariciones en distintos medios de comunicación (radio, televisión y escritos) nacionales e internacionales, dando entrevistas acerca de la psicología y temas contingentes del país. 
        </p>
      </div>
      <div className='parrafo'>
        <p>
          Exposiciones en seminarios y congresos en temas de psicología clínica y psicoterapia.       
        </p>
      </div>
      <div className='parrafo'>
        <p>
          Participación en grupos de estudios, supervisiones clínicas y diversos cursos, seminarios y congresos de especialización en el área de la psicología clínica, psicoterapia y docencia.   
        </p>
      </div>
      <div className='parrafo'>
        <p>  
          Membresía Colegio de Psicólogos de Chile y Sociedad Chilena de Psicología Clínica y Psicoterapia (SCPC).
        </p>
      </div>
    </div>
  )
}

export default SeeMore