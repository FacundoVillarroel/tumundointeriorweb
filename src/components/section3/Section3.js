import React, { useState } from "react";
import videoSection3 from "../../videos/videoSection3.mp4";
import SeeMore from "../SeeMore/SeeMore";
import videoPoster from "../../images/videoPoster.jpg";

const Section3 = () => {
  const [seeMore, setSeeMore] = useState(false);

  const openSeeMore = () => {
    setSeeMore(true);
    const element = document.getElementById("quienesSomos");
    const offsetTop = element.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="section3Container" id="quienesSomos">
      {seeMore ? <SeeMore closeSeeMore={() => setSeeMore(false)} /> : null}
      <div className="section3TitleContainer">
        <h2 className="section3Title">¿Quiénes somos?</h2>
        <div className="subTitleContainer">
          <p className="section3SubTitle">
            <span className="dosisItalic">Tu mundo interior</span>, es un centro
            de psicoterapia online, orientado a otorgar un espacio de confianza
            y bienestar. Pero por sobre todo es un camino hacia el
            autoconocimiento que permite abrirte paso a enfrentar de un modo
            distinto nuevas experiencias y así vivir una vida más plena.
          </p>
          <p className="section3SubTitle">
            Somos Magdalena, Jorge y Matías, y nuestro objetivo es entregarte
            soluciones que te permitan lidiar con situaciones adversas y
            adaptarte de forma más saludable a ellas, además de acompañarte en
            el difícil camino que puedas estar viviendo, y de esta forma en
            conjunto disminuir tu sufrimiento, ya que serás parte activa y
            protagonista del proceso de cambio.
          </p>
        </div>
      </div>
      <div className="professionalsContainer">
        <div className="professionalContainer">
          <div className="jorgeContainer"></div>
          <div className="professionalDescriptionContainer">
            <p className="professionalName">Jorge Rosende</p>
            <h3 className="professionalDescription">
              Director del centro
              <span className="dosisItalic"> Tu Mundo Interior</span>
            </h3>
            <h3 className="professionalDescription">Psicólogo Clínico</h3>
            <h3
              className="professionalDescription seeMore openSeeMoreBtn2"
              onClick={openSeeMore}
            >
              Ver Más
            </h3>
          </div>
        </div>
        <div className="professionalContainer">
          <div className="magdaContainer"></div>
          <div className="professionalDescriptionContainer">
            <p className="professionalName">Magdalena Pinedo</p>
            <h3 className="professionalDescription">Psicóloga Clínica</h3>
            <h3
              className="professionalDescription seeMore openSeeMoreBtn1"
              onClick={openSeeMore}
            >
              Ver Más
            </h3>
          </div>
        </div>
        <div className="professionalContainer">
          <div className="matiasContainer"></div>
          <div className="professionalDescriptionContainer">
            <p className="professionalName">Matías Vinot</p>
            <h3 className="professionalDescription">Psicólogo Clínico</h3>
            <h3
              className="professionalDescription seeMore openSeeMoreBtn2"
              onClick={openSeeMore}
            >
              Ver Más
            </h3>
          </div>
        </div>
      </div>
      <div className="videoContainer">
        <video controls poster={videoPoster}>
          <source src={videoSection3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="quoteContainer">
        <p className="section3SubTitle">
          <span className="dosisItalic">
            “El gran descubrimiento de mi generación es que los seres humanos
            pueden alterar sus vidas al alterar sus actitudes mentales”
          </span>
          (<span className="dosisBold">William James</span>) .
        </p>
      </div>
    </div>
  );
};

export default Section3;
