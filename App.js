import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import ResumeContext from './Context/ResumeContext';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ResumeState from './Context/ResumeState';
import About from './Pages/About/About';
import Login from './Login';
import BuilderArea from './Pages/BuilderArea';
import SignUp from './SignUp';
import Introduction from './Components/Intro/Introduction';
import Navbar from './Pages/Home/Navbar';
import App1 from './check/App1';
import ResponseTable from './check/ResponseTable';
import UploadPage from './Edit/UploadPage';
import EditPDF from './Edit/EditPDF';
import DownloadResume from './Edit/DownloadResume';
import PreviewResume from './Edit/PreviewResume';
import ConvertPdfToWord from './Edit/ConvertPdfToWord';
import DammiHome from './Pages/Home/DammiHome';
import DammiNav from './Pages/Home/DammiNav';
import ProtectedRoute from './Pages/Home/ProtectedRoute';
import MyResume from './MyResume';
import FeedbackPage from './FeedbackPage';
import Profile from './Components/Profile/Profile';
import { UserContext } from './Portfolio/UserContext';
function App() {
  const location = useLocation();
  const noNavbarRoutes = ['/', '/reg'];

  return (
    <ResumeState>
      <div className="App">
        <Helmet>
          <title>Resume Builder - Create Professional Resumes Online</title>
          <meta name="description" content="Build and customize professional resumes online with Resume Builder. Choose from a variety of templates and create your perfect resume easily." />
          <meta name="keywords" content="resume builder, professional resumes, online resumes, resume templates" />
          <meta name="author" content="Hardik Desai" />
          <meta property="og:title" content="Resume Builder - Create Professional Resumes Online" />
          <meta property="og:description" content="Build and customize professional resumes online with Resume Builder. Choose from a variety of templates and create your perfect resume easily." />
          <meta property="og:image" content="https://avatars.githubusercontent.com/u/87645745?v=4" />
          <meta property="og:url" content="https://quick-resume.netlify.app/" />
          <meta property="og:type" content="website" />
        </Helmet>
        
        </div>
        
        <Routes>
        <Route exact path="/" element={<DammiHome />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reg" element={<SignUp />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/intro" element={<Introduction />} />
          <Route exact path="/build" element={<BuilderArea />} />
          <Route path="/check" element={<App1 />} /> {/* Changed path to include trailing * */}
          <Route path="/result" element={<ResponseTable/>}/>
          {/* <Route path="/up" element={<UploadPage/>}/> */}
          <Route path="/up" element={<EditPDF/>}/>
          <Route path="/prev" element={<PreviewResume/>}/>
          <Route path="/down" element={<DownloadResume/>}/>
         
          <Route path="/intro" element={<ProtectedRoute component={Introduction} />} />
          <Route path="/myresume" elementlement={<MyResume/>}/>
          <Route path="/feedback" element={<FeedbackPage/>}/>
          <Route path="/profile" element={<Profile/>}/>
          </Routes>
         
        </ResumeState>
      );
      
}

export default App;
