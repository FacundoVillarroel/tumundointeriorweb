import React from 'react';
import image from "../../images/mapImage.jpg"

const Section1 = () => {
  return (
    <div className='section1Container'>
      <div className='imageTitleContainer'>
      </div>
      <div className='subtitleContainer'>
        <div className='imageSubtitleContainer'>
          <img src={image} alt="Balance entre el cerebro y el corazon" className='mapImage'/>
          <p style={{fontFamily:"beautyDream", fontSize:30, paddingTop:10}}>Hey!</p>
          <p className='mapQuote'><span style={{fontFamily:"beautyDream", fontSize:30}}>S</span>é parte de este viaje hacia tu mundo interior</p>
        </div>
        <div className='homeDescriptionContainer'>
          <h3 className='homeDescriptiontitleDecorative' lang='en'> Your only limit is your mind...</h3>
          <h2 className='homeDescriptionTitle'>¿Por qué elegirnos?</h2>
          <p className='homeDescriptionText'>Antes de otorgar una respuesta que busque entregarte la mayor y más clara descripción de nosotros como <span className='dosisBold' >profesionales de la salud mental</span>, queremos invitarte a realizar un trabajo que a primeras podría parecer sencillo y bastante obvio, pero no lo es. Y esto nos lleva a cambiar la pregunta anteriormente planteada a una que te deslice a lo más profundo de <span className="dosisItalic">tu mundo interior…</span> <span className='dosisBold'>¿Por qué elegirte a ti mismo?</span> Si estás aquí es porque de uno u otro modo, te estás eligiendo o al menos te estás aproximando a hacerlo. Por esa razón es que nos gustaría que antes de hablarte de nosotros, hablemos de ti y que descubras porque razón eres importante.</p>
          <p className='homeDescriptionText'>Realizar psicoterapia no es algo sencillo y requiere de <span className='dosisBold'>valentía, autocompasión y amor propio.</span> Esa palabra que suele estar de moda por estos tiempos pero que pocos comprenden su real significado. Pero creemos que si tú llegaste hasta aquí es porque lograste comprenderlo y ese es el primer paso.</p>
          <p className='homeDescriptionText'><span className='dosisBold'>¿Por qué elegirte?</span> Porque mereces darte una oportunidad de <span className='dosisBold'>sanar</span>, de <span className='dosisBold'>crecer</span>, de <span className='dosisBold'>evolucionar</span>, pero, sobre todo, mereces darte la oportunidad de sacar <span className='dosisBold'>tu mayor potencial</span> y de <span className='dosisBold'>embellecer</span> <span className="dosisItalic">tu mundo interior</span>. Y en ese camino queremos acompañarte y guiarte hacia tu mejor versión.</p>
          <p className='homeDescriptionText'><span className="dosisItalic">“Puede que la acción no traiga la felicidad, pero no hay felicidad sin acción” </span>(<span className='dosisBold'>William James</span>).</p>
        </div>
      </div>
    </div>
  )
}

export default Section1