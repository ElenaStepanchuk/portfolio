import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  return (
    <NavContainer>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
        to="home"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
        to="about"
      >
        About
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
        to="skills"
      >
        Skills
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
        to="mywork"
      >
        MyAbout
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
        to="contact"
      >
        Contact
      </NavLink>
    </NavContainer>
  );
};
export default Navigation;

const NavContainer = styled.nav`
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-left: auto;
`;
// const NavLinkTo = styled('Navlink')`
//   padding: 10px;
// `;
