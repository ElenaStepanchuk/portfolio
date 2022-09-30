import { Outlet } from 'react-router-dom';
import { Navigation } from 'components';

const Header = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Header;
