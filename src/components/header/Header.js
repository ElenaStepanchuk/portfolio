import { Outlet } from 'react-router-dom';
import { Navigation } from 'components';
import styled from 'styled-components';

// import headerBg from '../../img/bg/headerBg.jpg';

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <Navigation />
      </HeaderWrapper>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Header;

const HeaderWrapper = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  background: rgba(242, 237, 233, 1);
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
`;
