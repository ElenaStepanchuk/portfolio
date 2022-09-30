import { Routes, Route } from 'react-router-dom';
import { Home, About, Skills, MyWork, Contact } from '../pages';
import { BackgroundContainer, Header } from '../components';
export const App = () => {
  return (
    <>
      <BackgroundContainer>
        <Header />
        <Routes>
          <Route path="home" index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="mywork" element={<MyWork />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BackgroundContainer>
    </>
  );
};
