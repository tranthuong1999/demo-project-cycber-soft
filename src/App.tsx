import React, { ReactNode, Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './redux/hooks';
import { listCategory } from './redux/slices/category.slice';
import Appbar from './components/Appbar';
import Banner from './components/Banner';
import Course from './components/Course';
import DetailCourse from './components/DetailCourse';
import Intructors from './components/Intructors';
import Footer from './components/Footer';
import BackTop from './components/BackTop';
import LoginPage from './components/Login';
import DetailTotalCourse from './components/DetailTotalCourse';
import BlogPage from './components/Blog';
import EventPage from './components/Event';
import InformationPage from './components/Information';
import CourseByCategoryPage from './components/CourseByCatgory';
import { DetailCourseChildPage } from './components/DetailCourseChild';
import ProfilePage from './components/Profile';
import NotFoundPage from './components/NotFound';

const Member = lazy(() => import('./components/Member'));

type LayoutProps = {
  children: ReactNode;
};

function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(listCategory())
  }, [dispatch]);

  const MainLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <>
        <Appbar />
        {children}
        <Footer />
      </>
    );
  };


  const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
    return <>{children}</>;
  };


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Suspense fallback={<div>Loading...</div>}>
                <Banner />
                <Course />
                <DetailCourse />
                <Member />
                <Intructors />
                <BackTop />
              </Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          }
        />
        <Route
          path="/course"
          element={
            <MainLayout>
              <DetailTotalCourse />
            </MainLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <MainLayout>
              <BlogPage />
            </MainLayout>
          }
        />
        <Route
          path="/event"
          element={
            <MainLayout>
              <EventPage />
            </MainLayout>
          }
        />
        <Route
          path="/information"
          element={
            <MainLayout>
              <InformationPage />
            </MainLayout>
          }
        />
        <Route
          path="/course-by-category/:category"
          element={
            <MainLayout>
              <CourseByCategoryPage />
            </MainLayout>
          }
        />
        <Route
          path="/detail/:course_id"
          element={
            <MainLayout>
              <DetailCourseChildPage />
            </MainLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <MainLayout>
              <ProfilePage />
            </MainLayout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
