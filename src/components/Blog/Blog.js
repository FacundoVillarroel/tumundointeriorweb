import React,{useState} from 'react';
import Article1 from '../Articles/Article1';
import Article2 from '../Articles/Article2';
import Article3 from '../Articles/Article3';
import Article4 from '../Articles/Article4';
import Article5 from '../Articles/Article5';
import Article6 from '../Articles/Article6';
import Article7 from '../Articles/Article7';
import Article8 from '../Articles/Article8';

const Blog = () => {
  const [currentArticleClassName, setCurrentArticleClassName] = useState("");
  const [currentArticle, setCurrentArticle] = useState(null);

  const handleClick = (articleNumber) => {
    if(isNaN(articleNumber)){
      setCurrentArticleClassName("closed");
      setTimeout(() => {
        setCurrentArticle(articleNumber);
      }, 1000);
    } else {
      setCurrentArticleClassName("")
      setCurrentArticle(articleNumber)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  };

  const renderArticleComponent = () => {
    switch (currentArticle) {
      case 1:
        return <Article1 handleClick={handleClick} className={currentArticleClassName}/>;
      case 2:
        return <Article2 handleClick={handleClick} className={currentArticleClassName}/>;
      case 3:
        return <Article3 handleClick={handleClick} className={currentArticleClassName}/>;
      case 4:
        return <Article4 handleClick={handleClick} className={currentArticleClassName}/>;
      case 5:
        return <Article5 handleClick={handleClick} className={currentArticleClassName}/>;
      case 6:
        return <Article6 handleClick={handleClick} className={currentArticleClassName}/>;
      case 7:
        return <Article7 handleClick={handleClick} className={currentArticleClassName}/>;
      case 8:
        return <Article8 handleClick={handleClick} className={currentArticleClassName}/>;
      default:
        return null;
    }
  };


  return (
    <div className='blogContainer'>
      <p className='title'>
        Nuestro Blog
      </p>
      {renderArticleComponent()}
      <div className='blogGrid'>
        <div className='articleContainer article1' onClick={() => handleClick(1)}>
          <h2>
            MIS EXPECTATIVAS EN PSICOTERAPIA
          </h2>
        </div>
        <div className='articleContainer article2' onClick={() => handleClick(2)}>
          <h2>
            EL SÍNTOMA <span className='dosisBold'>NO</span> SOY YO
          </h2>
        </div>
        <div className='articleContainer article3' onClick={() => handleClick(3)}>
          <h2>
            ANSIEDAD: TERAPIA COGNITIVA AFECTIVA
          </h2>
        </div>
        <div className='articleContainer article4' onClick={() => handleClick(4)}>
          <h2>
            CRIANZA Y DESARROLLO EMOCIONAL
          </h2>
        </div>
        <div className='articleContainer article5' onClick={() => handleClick(5)}>
          <h2>
            PSICOLOGÍA POSITIVA PARA BIENESTAR
          </h2>
        </div>
        <div className='articleContainer article6' onClick={() => handleClick(6)}>
          <h2>
            RESILIENCIA: SUPERAR TRAUMAS
          </h2>
        </div>
        <div className='articleContainer article7' onClick={() => handleClick(7)}>
          <h2>
            DEPRESIÓN: ENFOQUES PSICOLÓGICOS
          </h2>
        </div>
        <div className='articleContainer article8' onClick={() => handleClick(8)}>
          <h2>
            RESILIENCIA: SUPERANDO TRAUMAS
          </h2>
        </div>
      </div>
      
    </div>
  )
}

export default Blog