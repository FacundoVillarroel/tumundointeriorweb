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
  const [currentArticle, setCurrentArticle] = useState(null);

  const handleClick = (articleNumber) => {
    setCurrentArticle(articleNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  };

  const renderArticleComponent = () => {
    switch (currentArticle) {
      case 1:
        return <Article1 />;
      case 2:
        return <Article2 />;
      case 3:
        return <Article3 />;
      case 4:
        return <Article4 />;
      case 5:
        return <Article5 />;
      case 6:
        return <Article6 />;
      case 7:
        return <Article7 />;
      case 8:
        return <Article8 />;
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
            ¿QUÉ ES LA PSICOLOGÍA?
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