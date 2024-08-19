import React, { useState, useEffect } from 'react';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const questionsData = [
          { id: 1, question: 'Tell me about yourself?' },
          { id: 2, question: 'What is your greatest weakness?' },
          { id: 3, question: 'Why do you want to work here?' },
        ];
        setQuestions(questionsData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch questions');
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!questions.length) {
    return <div>No data provided</div>;
  }

  return (
    <div>
      <h1>Interview Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>{question.question}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
