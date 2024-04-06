import React, { useState, useEffect, useRef, useCallback } from "react";
import { BiXCircle } from "react-icons/bi";

import DescriptionContainer from "./DescriptionContainer";

const SeeMore = ({ closeSeeMore }) => {
  const seeMoreRef = useRef(null);
  const [isClosed, setIsClosed] = useState(false);

  const closeAnimation = useCallback(async () => {
    setIsClosed(true);
    setTimeout(() => {
      closeSeeMore();
    }, 1000);
  }, [closeSeeMore]);

  useEffect(() => {
    const handleClickOutsideSeeMore = (event) => {
      const button1 = document.querySelector(".openSeeMoreBtn1");
      const button2 = document.querySelector(".openSeeMoreBtn2");
      const button3 = document.querySelector(".openSeeMoreBtn3");

      if (
        seeMoreRef.current &&
        !seeMoreRef.current.contains(event.target) &&
        button1 &&
        !button1.contains(event.target) &&
        button2 &&
        !button2.contains(event.target) &&
        button3 &&
        !button3.contains(event.target)
      ) {
        // Clicked outside .seeMoreContainer and outside the buttons to open it
        closeAnimation();
      }
    };
    document.addEventListener("click", handleClickOutsideSeeMore);
    return () => {
      document.removeEventListener("click", handleClickOutsideSeeMore);
    };
  }, [closeAnimation]);

  return (
    <div
      ref={seeMoreRef}
      className={`seeMoreContainer ${isClosed ? "seeMoreClosed" : ""}`}
      id="seeMoreContainer"
    >
      <div className="closeBtn" onClick={closeAnimation}>
        <BiXCircle />
      </div>
      <h2>Tu mundo interior</h2>
      <h3>Experiencia profesional y formación académica</h3>
      <div className="teamDescriptionContainer">
        {/* 1 */}
        <DescriptionContainer
          iconName={"RiUserHeartLine"}
          text={
            "Magdalena Pinedo Psicóloga clínica con cinco años de experiencia en el área de atención de pacientes en consulta particular, desde el *Modelo de Psicoterapia cognitivo-posracionalista.*"
          }
        />
        <DescriptionContainer
          iconName={"RiUserSettingsLine"}
          text={
            "Experiencia académica como ayudante en el ámbito de la psicoterapia."
          }
        />
        <DescriptionContainer
          iconName={"RiUserSettingsLine"}
          text={
            "Supervisora clínica de estudiantes en formación y titulados en el área de psicología clínica."
          }
        />
        <DescriptionContainer
          iconName={"RiUserFollowLine"}
          text={"Empatica y comprensiva. "}
        />
        <DescriptionContainer
          iconName={"RiUserFollowLine"}
          text={"Dispuesta a escuchar y resolver en todo momento."}
        />
        <DescriptionContainer
          iconName={"RiUserFollowLine"}
          text={"Comprometida y responsable con mi trabajo."}
        />
        <DescriptionContainer
          iconName={"RiUserFollowLine"}
          text={
            "Cuento con habilidades de responsabilidad afectiva necesarias para el trabajo con pacientes."
          }
        />
        <DescriptionContainer
          iconName={"RiUserFollowLine"}
          text={
            "Exenta de realización de juicios de valor en cualquier ámbito."
          }
        />
        <DescriptionContainer
          iconName={"RiUserFollowLine"}
          text={
            "Especializada particularmente en la atención de adultos y adolescentes."
          }
        />
        <DescriptionContainer
          iconName={"RiUserFollowLine"}
          text={
            "Dispuesta a entregar un espacio seguro y de confianza a mis pacientes en todo momento."
          }
        />
        <DescriptionContainer
          iconName={"TbAward"}
          text={
            "Membresía colegio de psicólogos de chile y sociedad chilena de psicología clínica y psicoterapia *(SCPC)*."
          }
        />
      </div>
      <h3>
        Magdalena cuenta con la siguiente formación académica posterior a la
        obtención de la licenciatura y titulación en psicología:
      </h3>
      <div className="teamDescriptionContainer">
        <DescriptionContainer
          iconName={"FaGraduationCap"}
          text={
            "Licenciada en psicología y titulada de psicóloga en *Universidad Autónoma* de chile, sede Santiago providencia."
          }
        />
        <DescriptionContainer
          iconName={"FaGraduationCap"}
          text={
            "Practica profesional en clínica de atención psicológica *(CAPS)* Providencia."
          }
        />
        <DescriptionContainer
          iconName={"FaGraduationCap"}
          text={
            "Tesis; *creación y validación de instrumento que evalúa la normalización de la violencia de parejas adolescentes*."
          }
        />
        <DescriptionContainer
          iconName={"FaGraduationCap"}
          text={
            "*Investigaciones científicas* en el área de psicología y creación de artículos de psicología clínica y psicoterapia."
          }
        />
        <DescriptionContainer
          iconName={"FaGraduationCap"}
          text={
            "*Diplomado de postítulo en el área de psicología forense* en la Pontifica Universidad Católica de Chile *(PUC)*."
          }
        />
        <DescriptionContainer
          iconName={"FaGraduationCap"}
          text={
            "Cursos de psicoterapia en formación en el área de psicología, posterior al titulo de psicóloga."
          }
        />
        <DescriptionContainer
          iconName={"FaGraduationCap"}
          text={"Supervisión constante de casos clínicos."}
        />
      </div>
    </div>
  );
};

export default SeeMore;
