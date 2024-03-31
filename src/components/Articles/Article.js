import React from "react";
import { BiXCircle } from "react-icons/bi";

import formatText from "../../helper/formatText";

const Article = ({ data, handleClick, isOpen }) => {
  return (
    <div
      style={{ "--image-url": `url(${data.image})` }}
      className={`articleTextContainer ${isOpen ? "" : "closed"}`}
    >
      <div className="closeBtn" onClick={handleClick}>
        <BiXCircle />
      </div>
      <h2>{data.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: formatText(data.text) }} />
      {data.footer1 && <p className="textFoot">{data.footer1}</p>}
      {data.footer2 && <p className="textFoot">{data.footer2}</p>}
      {data.footer3 && <p className="textFoot">{data.footer3}</p>}
    </div>
  );
};

export default Article;
