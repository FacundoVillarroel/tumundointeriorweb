import React from 'react';
import {BiXCircle} from "react-icons/bi";

const Article3 = ({handleClick, className}) => {
  return (
    <div className={`articleTextContainer article3 ${className}`}>
      <div className="closeBtn" onClick={handleClick}>
        <BiXCircle/>
      </div>
      <h2>
        LA IMPORTANCIA DEL APEGO TEMPRANO
      </h2>
      <div className='parragraph'>
        <p>
          Al momento del nacimiento, el infante es cien por cien inmaduro, y se encuentra en la etapa de mayor indefensión que presentará a lo largo de toda su vida. Y todos, absolutamente todos, creamos y necesitamos establecer un vínculo <span className="dosisBold">seguro</span> con nuestra figura cuidadora.
        </p>
        <p>
          En todos los casos siempre existirá alguien a quien nos vincularemos, y la importancia de esto, es propiciar que ese vínculo sea firme y estable sobre todo en nuestros primeros años de vida (0-5 años).
        </p>
      </div>
      <div className='parragraph'>
        <p>
          Por <span className='dosisBold'>apego</span> comprendemos la cercanía afectiva que existe entre cuidador e infante (madre, padre, abuelos, tíos, o quien se encuentre a cargo del lactante desde su nacimiento, según sea el caso y las circunstancias) y la relación que se establece entre ambos. Ahora bien, la importancia de esto es comprender que no sólo es necesario que exista un apego seguro entre ambos, sino que es vital para un desarrollo saludable que así sea.
        </p>
        <p>
          Por otra parte, es muy necesario tener en consideración que el apego que se establezca entre estos debe ser <span className='dosisBold'>seguro</span> y basarse en una relación de <span className='dosisBold'>confianza, cuidado, empatía y protección</span> hacia el menor.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          <span className='dosisBold'>Confianza:</span> el menor debe sentir que es capaz de confiar en su figura cuidadora, debe saber que en dicha figura encontrará un espacio de contención, seguridad y reciprocidad. Dicho cuidador debe otorgar ese espacio en la relación existente para que sea propicio el adecuado desarrollo afectivo de éste.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          <span className='dosisBold'>Cuidado:</span> es importante que el cuidador sea capaz de suplir todas las necesidades del infante, ya sean afectivas, físicas y fisiológicas.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          <span className='dosisBold'>Empatía:</span> en esta categoría se espera que el cuidador cuente con habilidades básicas de cuidados de atención al menor, tales como; comprensión ante sus demandas, atención a sus necesidades y además ser capaz de sintonizar con sus estructuras, según corresponda su edad.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          <span className='dosisBold'>Protección:</span> en este punto es necesario considerar que el menor desde muy pequeño siente una inmensa necesidad y curiosidad de conocer el mundo que lo rodea. Para ello se requiere propiciar un espacio seguro que le permita expandir su capacidad exploratoria, sin embargo, no debemos confundir la protección que es necesaria y saludable, con la sobreprotección hacia el menor, que de algún modo limitaría sus capacidades y podría generar frustración e inseguridad en él mismo, generando así lo contrario a lo que se desea.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          Ahora bien, <span className='dosisBold'>¿qué ocurre si no se logra establecer un apego seguro en la infancia?</span> Según diversas investigaciones científicas, se ha logrado evidenciar que existe un alto porcentaje de sujetos evaluados, que en su edad adulta, presentan problemáticas tales como; una baja <span className='dosisBold'>autoestima, inseguridad en sus capacidades, conflictos relacionales, inmadurez emocional, falta de empatía, escasa reciprocidad afectiva y/o dependencia emocional, psicopatologías de orden mental, trastornos de personalidad,</span> entre otros.
        </p>
        <p>
          Por otra parte, debemos comprender que el <span className='dosisBold'>estilo de apego</span> que formemos en nuestra infancia con nuestra figura principal (persona a la cual nos vinculamos), será el estilo afectivo que utilizaremos en nuestra vida adulta al momento de establecer relación con un otro.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          Existen diversos estilos de apego, sin embargo, en este escrito, sólo me referiré a algunos de ellos:
        </p>
      </div>
      <div className='parragraph'>
        <p>
          <span className='dosisBold'>Estilo de apego evitante:</span> los adultos que se formaron bajo este tipo de apego, son personas a las cuales les cuesta o rechazan la idea de mostrar y expresar sus emociones al resto. Suelen ser solitarios, sienten que es mejor no mostrar su sufrimiento, suelen considerarse personas poco dignas der ser queridas o apreciadas y tienden a desarrollar una falsa imagen de fortaleza y frialdad. Una de las carcaterísticas principales de este estilo, es que suelen sentir que pueden con todo, y que sólo se necesitan a sí mismos para lograr sus objetivos, presentando baja capacidad de incorporar al otro en su toma de decisiones y dificultades vitales.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          <span className='dosisBold'>Estilo de apego coercitivo:</span> los adultos que se formaron bajo este estilo de apego, suelen ser personas con una alta necesidad de atención, protección y cuidado del otro. Bajo este estilo, sienten que es el otro quien debe hacerse cargo de sus emociones negativas y resolverlas, sientiendo una alta incapacidad en sí mismos para enfrentarse a situaciones adversas por sí solos. A diferencia del estilo de apego evitante, los llamados “coercitivos”, suelen funcionar de forma extrovertida, haciendo parte al otro permanentemente de sus estados emocionales, sintiendo constantemente la necesidad de ser altamente importante en su vida.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          <span className='dosisBold'>Estilo de apego ambivalente:</span> son adultos que tal como su nombre indica, viven relaciones ambivalentes, de amor y odio. Son personas que temen tremendamente la idea de abandono en una relación, les cuesta confiar en el otro y se encuentran en constante duda ante la relación afectiva. Presentan dificultades para entregar su corazón a un otro por miedo a que puedan lastimarlo y perciben la relación como una constante amenaza, ya que no saben cuando podrán entregarse completamente.
        </p>
      </div>
      <div className='parragraph'>
        <p>
          Para finalizar, es necesario comprender que TODOS presentamos un determinado estilo de apego, dependiendo de la relación afectiva que hayamos experimentado en la infancia con nuestro cuidador; Sin embargo, cuando hablo de <span className='dosisBold'>apego inseguro</span>, me refiero a la <span className='dosisBold'>rigidez, desorganización</span> y <span className='dosisBold'>psicopatología</span> de ese determinado estilo afectivo.
        </p>
      </div>
      
      
      <p className='textFoot' style={{paddingTop:"20px"}}>
        Un abrazo a todos mis pacientes y lectores,
      </p>
      <p className='textFoot'>
        Magdalena Pinedo, Psicóloga Clínica,
      </p>
      <p className='textFoot'>
        17 de mayo, 2023.
      </p>
    </div>
  )
}

export default Article3