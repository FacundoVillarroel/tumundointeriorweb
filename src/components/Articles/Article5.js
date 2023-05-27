import React from 'react';
import {BiXCircle} from "react-icons/bi";

const Article5 = ({handleClick, className}) => {
  return (
    <div className={`articleTextContainer article5 ${className}`}>
      <div className="closeBtn" onClick={handleClick}>
        <BiXCircle/>
      </div>
      <h2>
        EMOCIONES POSITIVAS
      </h2>
      <div className='parragraph'>
        <p>Hablemos de la <span className='dosisBold'>importancia e influencia que tienen las emociones positivas en el ser humano</span>, especialmente en la infancia, ya que se plantea que tiene una repercusión directa en la adultez.</p>
        <p>A modo general, la emoción es un complejo entramado de valoraciones cognitivas, experiencias subjetivas, cambios fisiológicos, expresiones corporales y tendencias conductuales.</p>
      </div>
      <div className='parragraph'>
        <p>Cuando se habla de <span className='dosisBold'>emociones positivas (felicidad, alegría, interés, serenidad, simpatía y gratitud)</span> la valencia que se le da es placentera y los cambios que se producen (cognitivos, fisiológicos y comportamentales) dejan un resultado favorable para el individuo.</p>
      </div>
      <div className='parragraph'>
        <p>La experiencia frecuente de emociones positivas, aumenta la resistencia y fortalece ciertas capacidades humanas en las diferentes etapas de la vida. También, predicen las conductas asertivas y <span className='dosisBold'>minimizan las reacciones agresivas</span>, favorecen un afrontamiento funcional de la amenaza y se relacionan positivamente con el bienestar subjetivo.</p>
      </div>
      <div className='parragraph'>
        <p>En el ámbito del desempeño social, las emociones positivas de <span className='dosisBold'>simpatía, serenidad y gratitud, inducen pensamientos más flexibles</span>, creatividad y un repertorio más amplio de acciones conductuales que repercuten en poseer soluciones más asertivas a los problemas de interacción con nuestros pares, <span className='dosisBold'>disminuyendo los comportamientos agresivos.</span></p>
        <p>También se ha demostrado que las conductas sociales pasivas (incapacidad para manifestar los propios deseos, opiniones y preferencias, asumiendo una actitud derrotista y una actitud de huida y de evitación), no estarían influidas por las emociones empáticas.</p>
      </div>
      <div className='parragraph'>
        <p>Particularmente los niños que son más serenos, muestran mayor predisposición a consolar al que está triste, a ayudar a los compañeros para hacer sus tareas, a prestar los juguetes, a compartir sus golosinas y hacer compañía a los amigos, entre otras conductas positivas. <span className='dosisBold'>La serenidad también inhibe la agresividad física y verbal de los niños.</span> Los niños más serenos se ven menos inclinados a pegar patadas y puñetazos, a morder a otros, a empujarlos, a decir mentiras, a burlarse o a proferir insultos.</p>
      </div>
      <div className='parragraph'>
        <p>Las <span className='dosisBold'>emociones positivas</span>, especialmente la alegría y la simpatía, <span className='dosisBold'>reducen significativamente la probabilidad de ser rechazados</span> por los pares y suelen ser percibidos por éstos como amigables, poco tristes, no solitarios, confiables y buenos compañeros.</p>
        <p>Las emociones positivas también ayudan a ampliar y construir recursos psicológicos que <span className='dosisBold'>facilitan el afrontamiento del estrés.</span> Los niños más simpáticos, serenos y con satisfacción personal de sus logros y capacidades, tienen una mayor tendencia a reestructurar, positivamente, el significado de las situaciones estresantes, buscar apoyo externo para solucionar el problema o conseguir contención afectiva y realizar acciones eficientes para resolver la situación problemática. Además, la <span className='dosisBold'>simpatía disminuye la probabilidad de que se produzca un descontrol de las emociones</span>, caracterizado por golpear, llorar o gritar, tirar cosas por el aire y otras conductas violentas.</p>
        <p>Por otra parte, las emociones positivas se encuentran sumamente relacionadas al contexto familiar, puesto que se ha demostrado que <span className='dosisBold'>la interacción padres-hijos tiene un impacto significativo sobre la salud mental de los niños.</span> El vínculo que se establece entre padres e hijos puede facilitar el desarrollo afectivo de estos últimos, o bien dificultar su florecimiento y expresión. Por ejemplo, la emoción positiva de la alegría, está influida significativamente por el vínculo de apego que desarrollan con su madre. Los niños que perciben un <span className='dosisBold'>apego seguro</span>, caracterizado por una elevada confianza y disponibilidad de su figura de apego, además de sentir protección, cuidado y amor, manifiestan mayor alegría que los niños que identifican a sus padres como poco sensibles a sus necesidades. (Si te interesa conocer más sobre el <span className='dosisBold'>apego seguro</span> y su importancia en edades tempranas, te invito a revisar nuestro blog, donde encontrarás un articulo referido a ello).</p>
      </div>
      <div className='parragraph'>
        <p>Cuando los padres imponen un control patológico en sus relaciones con sus hijos, o bien, cuando otorgan una autonomía extrema, la tranquilidad, la satisfacción con la vida y la gratitud de los hijos se ve disminuida significativamente.</p>
        <p>En cuanto a las <span className='dosisBold'>emociones de gratitud</span>, los niños que la presentan, se encuentran agradecidos de tener una familia, de poder contar con uno o los dos padres, tener hermanos y/o abuelos.</p>
      </div>
      <div className='parragraph'>
        <p>Por otra parte, las emociones positivas se han relacionado a otras variables como, por ejemplo, el género, donde los resultados de las investigaciones han señalado que las niñas tienden a ser más simpáticas y más alegres que los niños. Los varones mencionan con mayor frecuencia, como causa de su alegría, las actividades lúdicas y deportivas, mientras las niñas atribuyen la alegría a los vínculos familiares, específicamente a los sentimientos de amor, cuidado y protección por parte de adultos significativos.</p>
      </div>
      <div className='parragraph'>
        <p>Finalmente, respecto a la variable de edad, los resultados indican que los niños de menor edad, obtienen puntuaciones más altas en simpatía. Con respecto a las atribuciones causales de <span className='dosisBold'>alegría y de gratitud</span>, se encontró que los niños más pequeños mostraron una mayor tendencia a valorar y a atribuir su alegría a la posibilidad de jugar, recibir visitas, ser cuidados, pasear y tener juguetes, mientras que los niños más grandes señalan mayormente las relaciones afectivas, especialmente las establecidas con padres y hermanos, y la posesión de objetos materiales útiles.</p>
      </div>
      <p className='textFoot' style={{paddingTop:"20px"}}>
        Un abrazo a todos mis pacientes y lectores,
      </p>
      <p className='textFoot'>
        Magdalena Pinedo, Psicóloga Clínica,
      </p>
      <p className='textFoot'>
        20 de mayo, 2023.
      </p>
    </div>
  )
}

export default Article5