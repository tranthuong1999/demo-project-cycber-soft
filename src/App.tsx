import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import Appbar from './components/Appbar';
import Banner from './components/Banner';
import Course from './components/Course';
import DetailCourse from './components/DetailCourse';
import Member from './components/Member';
import Intructors from './components/Intructors';
import Footer from './components/Footer';
import BackTop from './components/BackTop';
import TestDesign from './components/TestDesign';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import DetailTotalCourse from './components/DetailTotalCourse';
import BlogPage from './components/Blog';
import EventPage from './components/Event';
import InformationPage from './components/Information';

function App() {
  const MainLayout = () => {
    return (
      <div>
        <Banner />
        <Course />
        <DetailCourse />
        <Member />
        <Intructors />
        <BackTop />
      </div>
    )
  }

  return (
    <Router>
      <Appbar />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<RegisterPage />} />
        <Route path="/course" element={<DetailTotalCourse />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/information" element={<InformationPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
