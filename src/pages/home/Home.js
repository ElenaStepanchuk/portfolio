import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
const Home = () => {
  return (
    <>
      <TitlePage>My home page</TitlePage>
      <nav>
        <Link to="about">About</Link>
      </nav>
      <Outlet />
    </>
  );
};
export default Home;
const TitlePage = styled.h1`
  margin-top: 50px;
`;
