import React, { useState, useEffect } from "react";
import fetchArticles from "../../helper/fetchArticles";

import FormUploadArticle from "../formUploadArticle/FormUploadArticle";
import Loading from "../loading/Loading";
import LoginForm from "./LoginForm";

const Admin = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState("");
  const [selectedArticle, setSelectedArticle] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const articlesArray = await fetchArticles();
      setArticles(articlesArray);
    };

    fetchData();
    setLoading(false);
  }, []);

  const handleClick = (articleId) => {
    const article = articles.find((article) => article.id === articleId);
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetSelectedArticle = () => {
    setSelectedArticle("");
  };

  const handleLogin = (username, password) => {
    if (
      (username === process.env.REACT_APP_ADMIN_USERNAME) &
      (password === process.env.REACT_APP_ADMIN_PASSWORD)
    ) {
      setIsAuth(true);
    } else {
      alert("Usuario y/o Contraseña incorrectos");
    }
  };

  return (
    <>
      {!isAuth ? (
        <LoginForm handleLogin={handleLogin} />
      ) : loading ? (
        <Loading text={"Guardando el Artículo"} color={"#e7d7c9"} />
      ) : (
        <div className="adminContainer">
          <FormUploadArticle
            setLoading={setLoading}
            selectedArticle={selectedArticle}
            resetSelectedArticle={resetSelectedArticle}
          />
          <div className="blogGrid">
            {articles &&
              articles.map((article) => {
                return (
                  <div
                    style={{ "--image-url": `url(${article.image})` }}
                    key={article.id}
                    className={"articleContainer"}
                    onClick={() => handleClick(article.id)}
                  >
                    <h2>{article.author ? article.author : article.title}</h2>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Admin;
