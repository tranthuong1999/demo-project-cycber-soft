import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { Button } from '@mui/material';
import { increment } from './redux/slices/counter.slice';
import { apiGetSession } from './apis/user.api';
import Appbar from './components/Appbar';
import Banner from './components/Banner';
import Course from './components/Course';
import DetailCourse from './components/DetailCourse';
import Member from './components/Member';
import Intructors from './components/Intructors';
import Footer from './components/Footer';
import BackTop from './components/BackTop';


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
      <Footer />
    </div>
  );
}

export default App;
