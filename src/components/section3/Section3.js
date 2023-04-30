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
      <div className='section3OptionsContainer'>
        <div className='section3OptionContainerMaida'>
          <p className='section3OptionTitle'>Magdalena Pinedo</p>
          <h3 className='section3OptionDescription'>Psicóloga Clínica</h3>
          {/* <div className='section3OptionButton'>
            <p className='section3OptionButtonText'>Ver Perfil</p>
          </div> */}
        </div>
        
        <div className='section3OptionContainerCoke'>
          <p className='section3OptionTitle'>Jorge Rosende</p>
          <h3 className='section3OptionDescription'>Psicólogo Clínico</h3>
          {/* <div className='section3OptionButton'>
            <p className='section3OptionButtonText'>Ver Perfil</p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Section3