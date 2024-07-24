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


function App() {
  return (
    <div>
      <Appbar />
      <Banner />
      <Course />
      <DetailCourse />
      <Member />
      <Intructors />
      <BackTop />
      <TestDesign />
      <Footer />
    </div>
  );
}

export default App;
