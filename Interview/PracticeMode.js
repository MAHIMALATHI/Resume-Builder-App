import React from 'react';
import generateAnswer from './generateAnswer';

function PracticeMode({ data }) {
  // Ensure the data prop is defined before using it
  if (!data) {
    return <div>No data provided</div>;
  }

  // Call generateAnswer with the provided data
  generateAnswer(data);

  return (
    <div>
      <h1>Practice Mode</h1>
      <p>Name: {data.name ? data.name : "No name provided"}</p>
    </div>
  );
}

export default PracticeMode;
