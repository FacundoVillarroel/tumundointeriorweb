import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const FrequentQuestion = ({ question }) => {
  const italicStyle = {
    fontStyle: 'italic'
  };

  const italicizeText = (text) => {
    const targetText = 'tu mundo interior';
    const regex = new RegExp(targetText, 'gi');
    return text.replace(regex, `<span style="font-style: italic;">${targetText}</span>`);
  };

  const formattedQuestion = italicizeText(question.question);
  const formattedAnswer = italicizeText(question.answer);

  return (
    <Container>
      <Accordion.Item eventKey={question.question} bsPrefix="question">
        <Accordion.Header>
          <div className="questionContainer">
            <p className='questionText' dangerouslySetInnerHTML={{ __html: formattedQuestion }}></p>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="answerContainer">
            <p className='answerText' dangerouslySetInnerHTML={{ __html: formattedAnswer }}></p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Container>
  );
};

export default FrequentQuestion;
