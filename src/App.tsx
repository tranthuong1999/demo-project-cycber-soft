import { Button } from '@mui/material';
import Appbar from './components/Appbar';
import Banner from './components/Banner';
import Course from './components/Course';
import DetailCourse from './components/DetailCourse';
import Intructors from './components/Intructors';
import Footer from './components/Footer';
import BackTop from './components/BackTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/Login';
import RegisterPage from './components/Register';
import DetailTotalCourse from './components/DetailTotalCourse';
import BlogPage from './components/Blog';
import EventPage from './components/Event';
import InformationPage from './components/Information';
import CourseByCategoryPage from './components/CourseByCatgory';
import { DetailCourseChildPage } from './components/DetailCourseChild';
import React, { Suspense, lazy, useEffect } from 'react';
import ProfilePage from './components/Profile';
import { useAppDispatch } from './redux/hooks';
import { listCategory } from './redux/slices/category.slice';

const Member = lazy(() => import('./components/Member'));

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listCategory())
}, [])


  const MainLayout = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
        <Course />
        <DetailCourse />
        <Member />
        <Intructors />
        <BackTop />
      </Suspense>
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
        <Route path="/course-by-category/:category" element={<CourseByCategoryPage />} />
        <Route path="/detail/:course_id" element={<DetailCourseChildPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
