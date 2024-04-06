import React from "react";

import {
  RiUserHeartLine,
  RiUserSettingsLine,
  RiUserFollowLine,
} from "react-icons/ri";
import { TbAward } from "react-icons/tb";
import { FaGraduationCap } from "react-icons/fa";
import { RxDot } from "react-icons/rx";

const DescriptionContainer = ({ iconName, text }) => {
  const selectedIcon = () => {
    switch (iconName) {
      case "RxDot":
        return <RxDot fontSize={25} color={"ede9e3"} />;
      case "RiUserHeartLine":
        return <RiUserHeartLine fontSize={25} color={"a38f85"} />;
      case "RiUserSettingsLine":
        return <RiUserSettingsLine fontSize={25} color={"a38f85"} />;
      case "RiUserFollowLine":
        return <RiUserFollowLine fontSize={25} color={"a38f85"} />;
      case "TbAward":
        return <TbAward fontSize={25} color={"a38f85"} />;
      case "FaGraduationCap":
        return <FaGraduationCap fontSize={25} color={"a38f85"} />;
      default:
        break;
    }
  };

  const formatText = () => {
    const regex = /\*(.*?)\*/g;
    let formattedText = "";
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(text)) !== null) {
      formattedText += text.substring(lastIndex, match.index);
      formattedText += `<strong>${match[1]}</strong>`;
      lastIndex = match.index + match[0].length;
    }
    formattedText += text.substring(lastIndex);
    return formattedText;
  };

  return (
    <div className="teamDescriptionItemContainer">
      <div className="teamDescriptionItem">{selectedIcon()}</div>
      <p
        className="teamDescriptionText"
        dangerouslySetInnerHTML={{ __html: formatText() }}
      ></p>
    </div>
  );
};

export default DescriptionContainer;
