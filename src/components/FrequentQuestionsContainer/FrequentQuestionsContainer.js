import React from 'react';
import {Accordion} from "react-bootstrap";
import allQuestions from "../../data/frequentQuestions";
import FrequentQuestion from '../FrequentQuestion/FrequentQuestion';
import handBackground from "../../images/hands.png";

const FrequentQuestionsContainer = () => {

    return (
        <div className='frequentQuestionsContainer' id='parent'>
            <img className='imgBackground' src={handBackground} alt='hands Bacground' ></img>
            <div>
                <h2 className="frequentQuestionsTitle">Preguntas Frecuentes</h2>
            </div>
            
            <Accordion defaultActiveKey={['0']} bsPrefix="allQuestions">
                {allQuestions.map((question, key) =>{
                    return(<FrequentQuestion question={question} key={key}/>)
                })}
            </Accordion>
            <div className='frequentFootContainer'>
                <p className='frequentFootText'>Si te surge alguna inquietud que no se encuentre en nuestra selección de preguntas, no dudes en ponerte en contacto con nosotros.</p>
                <p className='frequentFootText'>Recuerda que puedes visitar nuestro blog en el inicio de nuestra página web, donde encontrarás artículos relacionados con la psicoterapia y diferentes afecciones clínicas.</p>
            </div>
        </div>
    )
}

export default FrequentQuestionsContainer