import React from 'react';
import {Accordion, Container} from "react-bootstrap";

const FrequentQuestion = ({question}) => {
  return (
    <Container>
            <Accordion.Item eventKey={question.question} bsPrefix="question">
                <Accordion.Header>
                  <div className="questionContainer">
                    <p className='questionText'>
                      {question.question}
                    </p>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                    <div className="answerContainer">
                        <p className='answerText'>
                          {question.answer}
                        </p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Container>
  )
}

export default FrequentQuestion