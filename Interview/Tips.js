import React from 'react';

const tips = [
  "Be concise and to the point.",
  "Structure your answers using the STAR method (Situation, Task, Action, Result).",
  "Focus on your achievements and contributions.",
  "Practice common questions with a friend or mentor.",
  "Stay calm and confident."
];

const Tips = () => {
  return (
    <div>
      <h2>Interview Tips</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tips;
