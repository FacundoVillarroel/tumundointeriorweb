import React, { useState, useEffect } from "react";

import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db, deleteImage, uploadImage } from "../../firebase/config";

import Article from "../Articles/Article";

const initialValues = {
  title: "",
  text: "",
  footer1: "",
  footer2: "",
  footer3: "",
  image: "",
  imageName: "",
};

const FormUploadArticle = ({
  setLoading,
  selectedArticle,
  resetSelectedArticle,
}) => {
  const [values, setValues] = useState(initialValues);

  const findIndex = async (articlesRef) => {
    const docsRef = (await getDocs(articlesRef)).docs;
    const array = docsRef.map((doc) => ({ id: doc.id, ...doc.data() }));
    return array.length - 1;
  };

  useEffect(() => {
    if (selectedArticle) {
      setValues(selectedArticle);
    }
  }, [selectedArticle]);

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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (!values.title || !values.text || !values.image) {
        alert("Faltan Títuto, Texto o Imagen");
      } else {
        const result = window.confirm(
          "¿Estás seguro que quieres guardar el Artículo?"
        );

        if (result) {
          if (values.id) {
            //Update Existing Article
            const articleRef = doc(db, "articles", values.id);
            const imageStored = await (await getDoc(articleRef)).data().image;
            if (values.image === imageStored) {
              updateDoc(articleRef, values);
            } else {
              //Upload new Image and deleting old one
              const imageStoredUrl = await uploadImage(values.image);
              if (!imageStoredUrl) {
                return alert("Ocurrió un error al guardar el artículo");
              } else {
                await deleteImage(values.image.name);
                updateDoc(articleRef, {
                  ...values,
                  imageName: values.image.name,
                  image: imageStoredUrl,
                });
              }
            }
          } else {
            //Create a New Article
            const imageStoredUrl = await uploadImage(values.image);
            if (!imageStoredUrl) {
              return alert("Ocurrió un error al guardar el artículo");
            } else {
              const articlesRef = collection(db, "articles");
              const index = await findIndex(articlesRef);
              await addDoc(articlesRef, {
                ...values,
                imageName: values.image.name,
                image: imageStoredUrl,
                index: index,
              });
            }
          }
          setValues(initialValues);
          alert("Artículo guardado correctamente");
        }
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      alert("Ocurrió un problema guardando el artículo, intente nuevamente");
    }
  };

  const handleEmptyForm = (e) => {
    e.preventDefault();
    setValues(initialValues);
    resetSelectedArticle();
  };

  const handleDelete = async () => {
    const result = await window.confirm(
      "¿Estás seguro/a de eliminar este Artículo?"
    );
    setLoading(true);
    if (result) {
      const articleRef = doc(db, "articles", values.id);
      await deleteDoc(articleRef);
      await deleteImage(values.imageName);
      alert("Artículo eliminado correctamente");
    }
    setValues(initialValues);
    resetSelectedArticle();
    setLoading(false);
  };

  return (
    <>
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
        <label htmlFor="image" style={{ fontWeight: "bold" }}>
          Adjuntar Imagen
        </label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleInputChange}
        />
        {values.image && (
          <img
            src={
              selectedArticle
                ? selectedArticle.image
                : URL.createObjectURL(values.image)
            }
            alt="Preview"
            style={{
              maxWidth: "100%",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          />
        )}
        <input
          className="saveButton"
          type="submit"
          value={values.id ? "Actualizar Artículo" : "Guardar Artículo"}
        />
        <div className="resetButton" onClick={handleEmptyForm}>
          Vaciar Formulario
        </div>
        {values.id && (
          <div className="deleteButton" onClick={handleDelete}>
            Eliminar este artículo
          </div>
        )}
      </form>
      {values.title && values.text && values.image ? (
        <>
          <h2 style={{ textAlign: "center" }}>Vista Previa</h2>
          <Article
            data={{
              ...values,
              image: selectedArticle
                ? selectedArticle.image
                : URL.createObjectURL(values.image),
            }}
            handleClick={() => {}}
            isOpen={true}
          />
        </>
      ) : null}
    </>
  );
};

export default FormUploadArticle;
