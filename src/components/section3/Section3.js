import React from 'react';

const Section3 = () => {
  return (
    <div className='section3Container' id='quienesSomos'>
      <div className='section3TitleContainer'>
        <h2 className='section3Title'>¿Quiénes somos?</h2>
        <p className='section3SubTitle'>Tu mundo interior es un centro de psicoterapia online orientado a otorgar un espacio de confianza y bienestar. Pero por sobre todo es un camino hacia el autoconocimiento que permite... y vivir una vida más plena. 
          El objetivo es entregarte recursos que te permitan lidiar con situaciones adversas y adaptarte de forma saludable a ellas.
        </p>
      </div>
      <div className='professionalsContainer'>
        <div className='professionalContainer'>
          <div className='maidaContainer'></div>
          <div className='professionalDescriptionContainer'>
            <p className='professionalName'>Magdalena Pinedo</p>
            <h3 className='professionalDescription'>Psicóloga Clínica</h3>
          </div>
        </div>
        <div className='professionalContainer'>
          <div className='cokeContainer'></div>
          <div className='professionalDescriptionContainer'>
            <p className='professionalName'>Jorge Rosende</p>
            <h3 className='professionalDescription'>Psicólogo Clínico</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3