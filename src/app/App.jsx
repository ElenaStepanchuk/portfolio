import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BackgroundContainer, Header, Loader } from '../components';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));
const Skills = lazy(() => import('../pages/skills/Skills'));
const MyWork = lazy(() => import('../pages/myWork/MyWork'));
const Contact = lazy(() => import('../pages/contact/Contact'));

// import { Home, About, Skills, MyWork, Contact } from '../pages';

export const App = () => {
  return (
    <>
      <BackgroundContainer>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="home" index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="skills" element={<Skills />} />
            <Route path="mywork" element={<MyWork />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BackgroundContainer>
    </>
  );
};
