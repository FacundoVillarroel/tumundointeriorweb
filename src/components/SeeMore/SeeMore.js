import React, { useState, useEffect, useRef, useCallback } from "react";
import { BiXCircle } from "react-icons/bi";

import DescriptionContainer from "./DescriptionContainer";

import jorgeData from "../../data/jorgeCv";
import magdalenaData from "../../data/magdalenaCv";
import matiasData from "../../data/matiasCv";

const SeeMore = ({ closeSeeMore, professionalName }) => {
  const seeMoreRef = useRef(null);
  const [isClosed, setIsClosed] = useState(false);

  let itemsExperience = magdalenaData.experience;
  let itemsStudies = magdalenaData.studies;

  switch (professionalName) {
    case "jorge":
      itemsExperience = jorgeData.experience;
      itemsStudies = jorgeData.studies;
      break;
    case "magdalena":
      itemsExperience = magdalenaData.experience;
      itemsStudies = magdalenaData.studies;
      break;
    case "matias":
      itemsExperience = matiasData.experience;
      itemsStudies = matiasData.studies;
      break;
    default:
      break;
  }

  const mid = Math.ceil(itemsExperience.length / 2);

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
        closeAnimation();
      }
    };
    document.addEventListener("click", handleClickOutsideSeeMore);
    return () => {
      document.removeEventListener("click", handleClickOutsideSeeMore);
    };
  }, [closeAnimation]);

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div
      className={`seeMoreContainerWrapper ${isClosed ? "seeMoreClosed" : ""}`}
    >
      <div
        ref={seeMoreRef}
        className={`seeMoreContainer`}
        id="seeMoreContainer"
      >
        <div className="closeBtn" onClick={closeAnimation}>
          <BiXCircle />
        </div>
        <h2>Tu mundo interior</h2>
        <h3>Experiencia profesional y habilidades psicoterapéuticas:</h3>
        <div className="teamDescriptionContainer">
          {itemsExperience.map((item, index) => (
            <div
              key={index}
              className={`teamDescriptionItem ${
                index < mid ? "leftColumn" : "rightColumn"
              }`}
            >
              <DescriptionContainer {...item} />
            </div>
          ))}
        </div>
        <h3>
          {capitalizeFirstLetter(professionalName)}, cuenta con la siguiente
          formación académica:
        </h3>
        <div className="teamDescriptionContainer">
          {itemsStudies.map((item, index) => (
            <div key={index} className={"teamDescriptionItem"}>
              <DescriptionContainer {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeeMore;
