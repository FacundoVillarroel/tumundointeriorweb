import React, { useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db, uploadImage } from "../../firebase/config";

import Article from "../Articles/Article";
import Loading from "../loading/Loading";

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    title: "",
    text: "",
    footer1: "",
    footer2: "",
    footer3: "",
    image: "",
  });

  const handleInputChange = (e) => {
    if (e.target.name === "image") {
      const [file] = e.target.files;
      setValues({
        ...values,
        image: file,
      });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };

  const findIndex = async (articlesRef) => {
    const docsRef = (await getDocs(articlesRef)).docs;
    const array = docsRef.map((doc) => ({ id: doc.id, ...doc.data() }));
    return array.length - 1;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!values.title || !values.text || !values.image) {
      alert("Faltan Títuto, Texto o Imagen");
    } else {
      const result = window.confirm(
        "¿Estás seguro que quieres guardar el Artículo?"
      );
      if (result) {
        const imageStoredUrl = await uploadImage(values.image);
        if (!imageStoredUrl) {
          return;
        } else {
          const articlesRef = collection(db, "articles");
          const index = await findIndex(articlesRef);

          const res = await addDoc(articlesRef, {
            ...values,
            image: imageStoredUrl,
            index: index,
          });
          if (res.id) {
            setValues({
              title: "",
              text: "",
              footer1: "",
              footer2: "",
              footer3: "",
              image: "",
            });
            setLoading(false);
            alert("Artículo guardado correctamente");
          } else {
            alert(
              "Ocurrió un problema guardando el artículo, intente nuevamente"
            );
          }
        }
      }
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading text={"Guardando el Artículo"} color={"#e7d7c9"} />
      ) : (
        <div className="adminContainer">
          <form
            className="formContainer"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
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
              <label htmlFor="text">Texto:</label>
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
            <label htmlFor="image">Adjuntar Imagen</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleInputChange}
            />
            {values.image && (
              <img
                src={URL.createObjectURL(values.image)}
                alt="Preview"
                style={{
                  maxWidth: "100%",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
            )}
            <input type="submit" value="Guardar Artículo" />
          </form>
          {values.title && values.text && values.image ? (
            <Article
              data={{ ...values, image: URL.createObjectURL(values.image) }}
              handleClick={() => {}}
              isOpen={true}
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default Admin;
