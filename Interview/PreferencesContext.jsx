// src/PreferencesContext.js

import React, { createContext, useState } from 'react';

const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState('medium');
  const [skills, setSkills] = useState(['Java', 'React', 'Spring Boot']); // Example skills
  const [jobs, setJobs] = useState(['Software Engineer', 'Frontend Developer']); // Example jobs

  return (
    <PreferencesContext.Provider value={{ fontSize, skills, jobs, setFontSize, setSkills, setJobs }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesContext;
