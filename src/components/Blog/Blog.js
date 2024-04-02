import React, { useEffect, useState } from "react";

import Article from "../Articles/Article";
import Loading from "../loading/Loading";
import fetchArticles from "../../helper/fetchArticles";

const Blog = () => {
  const [loading, setLoading] = useState(false);
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
      setTimeout(() => {
        window.scrollTo({
          top: 50,
          behavior: "smooth",
        });
      }, 150);
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
    const fetchData = async () => {
      const articlesArray = await fetchArticles();
      setArticles(articlesArray);
    };

    fetchData();
    setLoading(false);
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
        <div className="loadingContainer">
          <Loading text={"Cargando Artículos..."} color={"#e7d7c9"} />
        </div>
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
