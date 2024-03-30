import React from "react";
import { BiXCircle } from "react-icons/bi";

const Article2 = ({ handleClick, className }) => {
  return (
    <div className={`articleTextContainer article3 ${className}`}>
      <div className="closeBtn" onClick={handleClick}>
        <BiXCircle />
      </div>
      <h2>¿QUÉ DICE MI CUERPO?</h2>
      
En el presente escrito, expondré sobre la problemática asociada a la somatización que sufren niños y adolescentes, por diversas causas, dando a conocer distintas variables que desencadenan este tipo de sintomatología, además del rango etario al que abarca.

Para contextualizar, hay que tener claro lo que se entenderá por somatización. Para la psicología, como estudio de la salud mental, * la somatización hace referencia a la expresión de malestar emocional manifestado a través de síntomas físicos, NO explicados por ninguna enfermedad biológica que los valide. *
Bajo la premisa anterior, se cree que la etiología de los problemas psicosomáticos en infantes y adolescentes, está directamente relacionada a factores de índole psicosociales, genéticos y biológicos; con gran predominancia de poseer antecedentes familiares a la base, que incluyen problemas de salud, modelo parental, refuerzo de la enfermedad, temperamento y complicaciones psicológicas.

Por otra parte, es válido agregar que la somatización tiene un alto grado de reforzamiento por parte de los padres cuando el sujeto que la presenta es un niño. Dicho de otra forma, los padres suelen sobreproteger a sus hijos, generando así, un patrón de conducta a futuro que se base en la somatización para conseguir lo que desean, * SIN ser una forma consciente de manipulación * , como podría ser considerado. Sin embargo, lo anterior, sólo abarca un porcentaje de la población que presenta estos síntomas. Existen otras causales que podrían explicarlo, como por ejemplo, la presencia de dolencia física como forma inconsciente del individuo para *disociar una emoción no procesada* que lo amenazaría de forma significativa. * La mente centra su atención en la expresión de dolor corporal para no centrarse en la verdadera afección. *

Dentro de la sintomatología más común en estos casos se puede considerar: dolor abdominal, cefaleas, molestias musculares, cansancio físico, entre otras. Generalmente * las quejas por somatización suelen presentarse entre los 10 y 20 años de edad, pudiendo incrementarse con el paso del tiempo. *
Otro punto importante a tener en consideración, es que, en algunos casos, la somatización puede ser presentada por el niño o adolescente, gracias a la presencia de alguna enfermedad que afecte a alguno de los padres o cuidadores, imitando de manera inconsciente la sintomatología observada.

Por otra parte, es importante y resulta muy necesario profundizar en la temática de somatización, sobre todo al momento de abordarla frente a un paciente, ya que se debe contar con una base teórica sólida que respalde la intervención psicológica. Esto dado a que como la manifestación de la sintomatología, al ser corporal y desde una expresión que se relaciona más cercanamente al ámbito médico, resulta complejo que las personas asocien y validen que lo que les está ocurriendo es producto de un *conflicto intrapsíquico*, sobre todo porque al tratarse de un conflicto que presenta la persona en niveles inconscientes, donde la mente se encuentra disociando contenidos amenazantes para la conciencia de la persona, la experiencia que percibe de lo que le ocurre es extraña. Solamente cuando los exámenes médicos comienzan a descartar que no hay un diagnóstico biológico, los pacientes recién dan indicios de comenzar a abrirse a la posibilidad de que lo que les ocurre es algo correspondiente al ámbito de la psicología.

La mente es muy compleja, y por más que suele asociarse a algo exclusivamente cognitivo, es más que esto. Recordando los análisis y visión teórica que tenía W. James (1890), en su libro: *“Principios de psicología”*, postulaba que la mente era considerada como un todo en el ser humano, es decir, el cuerpo (soma), era entendido como una parte de la mente, por lo que a través de su propio lenguaje, como lo realiza mediante los síntomas, *“el cuerpo habla”*, pero en sus propios códigos y simbolismos que necesitan ser descifrados, ya que entrega una información muy valiosa al terapeuta para ir más allá y comprender en mayor profundidad la problemática que se encuentra presentando el paciente. Por lo mismo, se considera que aplicar únicamente técnicas psicológicas centradas exclusivamente en la eliminación del síntoma, por más que resulten eficaces bajo el criterio de que no se encuentre presente, queda en algún nivel no comprendido lo que le pasa a la persona, habiendo una alta probabilidad de que el síntoma pueda manifestarse en el futuro de la misma forma o de otra, ya que el conflicto sigue existiendo en el sujeto en algún lugar de su psiquis.

Finalmente, se considera relevante realizar un breve análisis en relación a la diferencia de género que se da entre niñas y niños en el porcentaje de manifestación de la sintomatología de somatización, donde * las niñas tienen un mayor índice que los niños * , y esto se encuentra asociado a las conductas de los padres en el efecto reforzador en este tipo de conductas. Sin ser concluyentes en una postura definitiva, podría pensarse que la diferencia, en este caso, en cuanto a la estadística asociada a la variable de género, podría tener relación con un elemento sociocultural, dado a que a las mujeres se les permite expresar más lo que les ocurre y/o presentarse más vulnerables que los hombres, ya que existen creencias en la sociedad como, por ejemplo; “las mujeres son más vulnerables que los hombres”, “los hombres deben ser fuertes y no mostrar debilidad”, “el hombre está para proteger a la mujer”, entre otras. De este modo, al existir este tipo de creencias, la actitud de los padres va a presentar una tendencia a ser más comprensiva frente a las niñas cuando somaticen que al momento que esto mismo lo manifiesten los niños.

      <p className="textFoot" style={{ paddingTop: "20px" }}>
        Un abrazo a todos mis pacientes y lectores,
      </p>
      <p className="textFoot">Magdalena Pinedo, Psicóloga Clínica,</p>
      <p className="textFoot">20 de mayo, 2023.</p>
    </div>
  );
};

export default Article2;
