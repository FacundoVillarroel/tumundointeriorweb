import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const FrequentQuestion = ({ question }) => {
  
  const italicStyle = {
    fontStyle: 'italic'
  };

  const formatText = (text) => {
    const targetText = 'tu mundo interior';
    const parts = text.split(targetText);
    return parts.map((part, index) => {
      if (index !== parts.length - 1) {
        return (
          <span key={index}>
            {part}
            <span style={italicStyle}>{targetText}</span>
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const formattedQuestion = formatText(question.question);
  const formattedAnswer = formatText(question.answer);

  return (
    <Container>
      <Accordion.Item eventKey={question.question} bsPrefix="question">
        <Accordion.Header>
          <div className="questionContainer">
            <p className='questionText'>{formattedQuestion}</p>
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="answerContainer">
            <p className='answerText'>{formattedAnswer}</p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Container>
  );
};

export default FrequentQuestion;
