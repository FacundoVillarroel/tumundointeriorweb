import React from 'react';
import {BiXCircle} from "react-icons/bi";

const Article1 = ({handleClick, className}) => {
  return (
    <div className={`articleTextContainer article1 ${className}`}>
      <div className="closeBtn" onClick={handleClick}>
        <BiXCircle/>
      </div>
      <h2>
        MIS EXPECTATIVAS EN PSICOTERAPIA
      </h2>
      <div className='parragraph'>
        <p>
          Hace unos días atendía a una paciente como es costumbre y me plantea algo que me pareció importante de evidenciar, y es el hecho de hablar de nuestras expectativas en psicoterapia, del modo que yo espero o creo que me voy a sentir al realizar el proceso psicoterapéutico.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          Muchas veces como psicólogos/as pensamos que nuestros pacientes saben a lo que se van a enfrentar cuando deciden comenzar el tratamiento, sin embargo, a modo personal me he dado cuenta que no ocurre en todos los casos y eso me lleva a cuestionar la importancia de referirme a esto.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          Esta paciente de la cual les hablaba, a la que por temas de confidencialidad no expondré su nombre, refiere que su madre una tarde le comenta: “que estás sensible, todo lo que digo te afecta, no sé para qué vas al psicólogo si no te está ayudando”; y esa frase removió muchas cosas en mi interior, que como expuse anteriormente, pensé que podían ser de conocimiento frecuente, pero que tal vez, no siempre es así.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          Cabe recalcar que la paciente de la cual estoy haciendo referencia, ha tenido problemas con su madre, y ese ha sido principalmente el motivo de consulta, pero dichos problemas no se habían evidenciado sino hasta después de comenzar el proceso de psicoterapia.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          Efectivamente la paciente ha estado viviendo un proceso en el cual ha estado experimentando emociones que se encuentran más a flor de piel, y evidentemente ha hecho mucho más consciente lo que le ocurre con su madre y esto lleva naturalmente a una reacción distinta a la que posiblemente presentaba antes de comenzar el tratamiento. 
        </p>
      </div>
      <div className='parragraph'>
        <p>
          A lo que quiero llegar puntualmente, es que este tipo de comentarios suelen ser más habituales de lo que yo pensaba, porque la expectativa que ponen los/as pacientes es de que cuando inicien el tratamiento rápidamente se van a sentir mejor, evidente, ¿para qué voy a buscar algo que me hará más “daño”, no? Y aquí nos acercamos al meollo del asunto.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          En psicoterapia se expone una problemática, dolor, sufrimiento, etc., con el fin de resolverlo y atenuar esa experiencia desagradable que hemos venido sintiendo, sin embargo, una de las cosas que hacemos en psicoterapia, es exponer y trabajar en ese dolor con el fin de ir “desbloqueando” niveles de conciencia en el/la paciente, para que así sea capaz de ampliar su experiencia y pueda sentir el evento de un modo distinto. El punto está, en que para llegar a ese momento deseado, existen una serie de etapas por las cuales transitará el/la paciente, que no siempre serán gratas, y que efectivamente podrían experimentarse como que el proceso no está sirviendo, pero es justamente ahí donde se generan la mayor cantidad de cambios. 
        </p>        
      </div>
      <div className='parragraph'>
        <p>
          Me gustaría explicar esto con un ejemplo que surge muchísimo en la práctica clínica.
        </p>        
      </div>
      <div className='parragraph'>
        <p>
          Un/a paciente consulta porque acaba de terminar una relación de pareja y se siente devastado/a. Refiere que no sabe cómo sobreponerse, que no tiene ganas de ir a trabajar, que apenas puede levantarse de la cama en la mañana, y quiere que todo ese malestar desaparezca lo mas rápidamente posible porque necesita retomar su vida.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          Ahora bien, ¿cómo hago yo, como psicoterapeuta, para quitarle ese dolor sin exponerlo/a a sus verdaderas emociones, que evidentemente serán ingratas, para modificar una experiencia dolorosa? Yo DEBO llevar al paciente a que revisemos juntos/as lo más profundo de sus emociones y sentimientos, que reitero, si consulta por un duelo, no esperemos encontrarnos con emociones gratificantes, porque los duelos cuestan y duelen.
        </p>        
      </div>
      <div className='parragraph'>
        <p>
          Lamentablemente y muchas veces esta parte del proceso, cuando se está accediendo al dolor que se encuentra a la base y a lo que la conciencia se resistía a enfrentar, es cuando más deserciones existen en el proceso psicoterapéutico, porque el sistema de ese/a paciente no se encuentra del todo preparado para ampliar aún sus esquemas y así poder generar el cambio deseado.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          Cambiar esquemas, crecer, sanar y evolucionar, no es un proceso fácil y a veces duele, pero quiero transmitirles que ese dolor no será eterno. Debe existir como parte del cambio, pero pasa, y la recompensa al final de ese camino habrá valido absolutamente la pena. 
        </p>
      </div>
      <div className='parragraph'>
        <p>
          No está de más decir que el proceso en psicoterapia es dinámico, y no siempre se expondrán temas dolorosos a trabajar; habrá momentos en los cuales sea mucho más agradable una sesión, y habrá otras que serán más difíciles de llevar, pero les garantizo que nuestro trabajo es exponerlos a sus emociones con la contención necesaria y en los tiempos que su propio sistema personal nos lo permita, con el fin de no generar un proceso iatrogénico (condición mental adversa inducida en un paciente por efectos indeseados o lesivos del tratamiento).
        </p>
      </div>
      <p className='textFoot' style={{paddingTop:"20px"}}>
        Un abrazo a todos mis pacientes y lectores,
      </p>
      <p className='textFoot'>
        Magdalena Pinedo, Psicóloga Clínica,
      </p>
      <p className='textFoot'>
        7 de mayo, 2023.
      </p>
    </div>
  )
}

export default Article1