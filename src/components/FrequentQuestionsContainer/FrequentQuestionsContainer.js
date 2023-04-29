import React from 'react';
import {Accordion} from "react-bootstrap";
import allQuestions from "../../data/frequentQuestions";
import FrequentQuestion from '../FrequentQuestion/FrequentQuestion';

const FrequentQuestionsContainer = () => {
    return (
        <div className='frequentQuestionsContainer'>
                <div>
                    <h2 className="frequentQuestionsTitle">Preguntas Frecuentes</h2>
                </div>
                
                <Accordion defaultActiveKey={['0']} bsPrefix="allQuestions">
                    {allQuestions.map((question, key) =>{
                        return(<FrequentQuestion question={question} key={key}/>)
                    })}
                </Accordion>
            </div>
    )
}

export default FrequentQuestionsContainer