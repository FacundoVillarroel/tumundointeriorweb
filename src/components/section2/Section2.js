import React from 'react';
import { BiBrain, BiDonateHeart } from "react-icons/bi"

const Section2 = () => {
  return (
    <div className='section2Container'>
      <div className='section2TitleContainer'>
        <h2 className='section2Title'>Nuestro Enfoque</h2>
      </div>
      <div className='section2DescriptionItemsContainer'>
        <div className='section2DescriptionContainer'>
          <div className='section2ItemContainer'>
            <div className='section2Item'><BiBrain/></div>
            <div className='section2Text'>
              <p>
                En el Centro <span className='dosisItalic'>Tu Mundo Interior</span>, para abordar los problemas del ámbito de la salud mental, nos basamos en el modelo de psicoterapia cognitivo – posracionalista, creado por el autor italiano Vittorio Guidano (1944 – 1999), quien fue doctor en medicina, neuropsiquiatra,  psicoterapeuta, investigador y docente. 
              </p>
            </div>
          </div>
          <div className='section2ItemContainer'>
            <div className='section2Item'><BiDonateHeart/></div>
            <div className='section2Text'>
              <p>
                Vittorio Guidano, impactó profundamente los fundamentos de la psicología tradicional, marcando un antes y un después, al integrar los relevantes aportes de investigaciones actualizadas provenientes de distintas disciplinas científicas, agrupándolos en un solo enfoque de psicoterapia. 
              </p>
            </div>
          </div>
          <div className='section2ItemContainer'>
            <div className='section2Item'><BiBrain/></div>
            <div className='section2Text'>
              <p>
                La psicoterapia cognitivo – posracionalista, aborda la sintomatología considerando la historia de vida del sujeto y sus vínculos más significativos, la importancia de las emociones en el cambio, el contexto actual en el que surge el síntoma y la visión de la persona como un ser único e irrepetible. 
              </p>
            </div>
          </div>
        </div>
        <div className='section2DescriptionContainer'>
          <div className='section2ItemContainer'>
            <div className='section2Item'><BiDonateHeart/></div>
            <div className='section2Text'>
              <p>
                En el posracionalismo, se analiza e interviene la problemática actual del paciente, generando en conjunto una comprensión de la dinámica del síntoma, la coherencia con el funcionamiento de la persona y el sentido adaptativo que está presentando en su vida. 
              </p>
            </div>
          </div>
          <div className='section2ItemContainer'>
            <div className='section2Item'><BiBrain/></div>
            <div className='section2Text'>
              <p>
                Desde este enfoque, el rol del psicoterapéuta y paciente es activo y protagonista. El primero es experto en teoría y técnicas de psicoterapia y el segundo es experto en su vida. Juntos complementan estos valiosos conocimientos para lograr los objetivos terapéuticos que ambos acordaron. 
              </p>
            </div>
          </div>
          <div className='section2ItemContainer'>
            <div className='section2Item'><BiDonateHeart/></div>
            <div className='section2Text'>
              <p>
                La psicoterapia posracionalista, logra un rápido y efectivo cambio sintomático principalmente en la fase de inicio del tratamiento. Así como también, las crisis vitales se consideran una oportunidad para aumentar el autoconocimiento y ampliar los límites en una lógica de un espiral infinito de evolución humana. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2