import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FileUploadComponent from './FileUpload.jsx';
import ResponseTable from './ResponseTable.jsx';
import Nav from './Nav.jsx';
import Footer from '../Components/Footer/Footer.jsx';

function App1() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<FileUploadComponent />} />
        
        <Route path="*" element={<FileUploadComponent />} />
      </Routes>
     <Footer/>
    </div>
  );
}

export default App1;
