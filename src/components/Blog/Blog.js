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
          style={{ "--image-url": `url(${article.image})` }}
          key={article.id}
          className={"articleContainer"}
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
          style={{ "--image-url": `url(${article.image})` }}
          key={article.id}
          className={"articleContainer"}
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
