import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

import Article from "../Articles/Article";

const Admin = () => {
  const [values, setValues] = useState({
    title: "",
    text: "",
    footer1: "",
    footer2: "",
    footer3: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = window.confirm(
      "¿Estás seguro que quieres guardar el Artículo?"
    );
    console.log("result", result);
    if (result) {
      const articlesRef = collection(db, "articles");
      const res = await addDoc(articlesRef, values);
      console.log(res.id);
      setValues({
        title: "",
        text: "",
        footer1: "",
        footer2: "",
        footer3: "",
      });
    } else {
      return;
    }
  };

  return (
    <div className="adminContainer">
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="inputRow">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={values.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputRow">
          <label htmlFor="text">Párrafo:</label>
          <textarea
            id="text"
            name="text"
            rows="10"
            cols="100"
            value={values.text}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="inputRow">
          <label htmlFor="footer1">Píe de artículo</label>
          <input
            type="text"
            id="footer1"
            name="footer1"
            value={values.footer1}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputRow">
          <label htmlFor="footer2">Píe de artículo</label>
          <input
            type="text"
            id="footer2"
            name="footer2"
            value={values.footer2}
            onChange={handleInputChange}
          />
        </div>
        <div className="inputRow">
          <label htmlFor="footer3">Píe de artículo</label>
          <input
            type="text"
            id="footer3"
            name="footer3"
            value={values.footer3}
            onChange={handleInputChange}
          />
        </div>

        <input type="submit" value="Guardar Artículo" />
      </form>
      {values.title && values.text ? <Article data={values} /> : null}
    </div>
  );
};

export default Admin;
