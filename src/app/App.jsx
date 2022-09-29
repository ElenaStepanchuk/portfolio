import { Routes, Route, Outlet } from 'react-router-dom';
import { Home, About, Skills, MyWork, Contacts } from '../pages';
import { BackgroundContainer } from 'components';
export const App = () => {
  return (
    <>
      <BackgroundContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work" element={<MyWork />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </BackgroundContainer>
    </>
  );
};
