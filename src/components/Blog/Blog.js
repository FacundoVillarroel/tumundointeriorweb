import React, { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";

import { db } from "../../firebase/config";

import Article from "../Articles/Article";

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (articleId) => {
    const articleFound = articles.find((article) => article.id === articleId);
    if (!articleFound) {
      setIsOpen(false);
      setTimeout(() => {
        setSelectedArticle("");
      }, 1000);
    } else {
      setIsOpen(true);
      setSelectedArticle(articleFound);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const renderArticleComponent = () => {
    if (selectedArticle) {
      return (
        <Article
          data={selectedArticle}
          handleClick={() => handleClick("close")}
          isOpen={isOpen}
        />
      );
    }
  };

  useEffect(() => {
    setLoading(true);

    const articlesRef = collection(db, "articles");
    getDocs(articlesRef)
      .then((resp) => {
        const articlesArray = resp.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        articlesArray.sort((a, b) => {
          if (typeof a.index === "number" && typeof b.index === "number") {
            return a.index - b.index;
          } else {
            return typeof a.index === "number" ? 1 : -1;
          }
        });
        console.log(articlesArray);
        setArticles(articlesArray);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const introductoryGridContent = articles.map((article) => {
    if (isNaN(article.index)) {
      return (
        <div
          key={article.id}
          className={`articleContainer article${article.index}`}
          onClick={() => handleClick(article.id)}
        >
          <h2>{article.author}</h2>
        </div>
      );
    }
    return null;
  });

  const articlesGridContent = articles.map((article) => {
    if (!isNaN(article.index)) {
      return (
        <div
          key={article.id}
          className={`articleContainer article${article.index}`}
          onClick={() => handleClick(article.id)}
        >
          <h2>{article.title}</h2>
        </div>
      );
    }
    return null;
  });

  return (
    <>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <div className="blogContainer">
          <p className="title">Nuestro Blog</p>
          {renderArticleComponent()}
          <div className="blogGrid introductoryArticlesGrid">
            {introductoryGridContent}
          </div>
          <div className="blogGrid">{articlesGridContent}</div>
        </div>
      )}
    </>
  );
};

export default Blog;

{
  /* <div
              className="articleContainer article1"
              onClick={() => handleClick(1)}
            >
              <h2>LA IMPORTANCIA DEL APEGO TEMPRANO</h2>
            </div>
            <div
              className="articleContainer article2"
              onClick={() => handleClick(2)}
            >
              <h2>¿QUE DICE MI CUERPO?</h2>
            </div>
            <div
              className="articleContainer article3"
              onClick={() => handleClick(3)}
            >
              <h2>EMOCIONES POSITIVAS</h2>
            </div>
            <div
              className="articleContainer article4"
              onClick={() => handleClick(4)}
            >
              <h2>RESILIENCIA: SUPERAR TRAUMAS</h2>
            </div>
            <div
              className="articleContainer article5"
              onClick={() => handleClick(5)}
            >
              <h2>DEPRESIÓN: ENFOQUES PSICOLÓGICOS</h2>
            </div>
            <div
              className="articleContainer article6"
              onClick={() => handleClick(6)}
            >
              <h2>RESILIENCIA: SUPERANDO TRAUMAS</h2>
            </div>
            <div
              className="articleContainer article7"
              onClick={() => handleClick(7)}
            >
              <h2>RESILIENCIA: SUPERANDO TRAUMAS</h2>
            </div>
            <div
              className="articleContainer article8"
              onClick={() => handleClick(8)}
            >
              <h2>RESILIENCIA: SUPERANDO TRAUMAS</h2>
            </div>
            <div
              className="articleContainer article9"
              onClick={() => handleClick(9)}
            >
              <h2>RESILIENCIA: SUPERANDO TRAUMAS</h2>
            </div>
            <div
              className="articleContainer article10"
              onClick={() => handleClick(10)}
            >
              <h2>RESILIENCIA: SUPERANDO TRAUMAS</h2>
            </div> */
}

/* const renderArticleComponent = () => {
    switch (currentArticle) {
      case "jorge":
        return (
          <JorgeArticle
            handleClick={handleClick}
            className={currentArticleClassName}
          />
        );
      case "magdalena":
        return (
          <MagdalenaArticle
            handleClick={handleClick}
            className={currentArticleClassName}
          />
        );
      case "matias":
        return (
          <MatiasArticle
            handleClick={handleClick}
            className={currentArticleClassName}
          />
        );
      case 1:
        return (
          <Article1
            handleClick={handleClick}
            className={currentArticleClassName}
          />
        );
      case 2:
        return (
          <Article2
            handleClick={handleClick}
            className={currentArticleClassName}
          />
        );
      case 3:
        return (
          <Article3
            handleClick={handleClick}
            className={currentArticleClassName}
          />
        );
      case 4:
        return (
          <Article4
            handleClick={handleClick}
            className={currentArticleClassName}
          />
        );
      case 5:
        return (
          <Article5
            handleClick={handleClick}
            className={currentArticleClassName}
          />
        );
      case 6:
        return (
          <Article6
            handleClick={handleClick}
            className={currentArticleClassName}
          />
        );
      case 7:
        return (
          <Article7
            handleClick={handleClick}
            className={currentArticleClassName}
          />
        );
      case 8:
        return (
          <Article8
            handleClick={handleClick}
            className={currentArticleClassName}
          />
        );
      case 9:
        return (
          <Article9
            handleClick={handleClick}
            className={currentArticleClassName}
          />
        );
      case 10:
        return (
          <Article10
            handleClick={handleClick}
            className={currentArticleClassName}
          />
        );
      default:
        return null;
    }
  }; */
