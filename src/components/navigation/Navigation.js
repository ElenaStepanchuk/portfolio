import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import homeSvg from '../../img/nav/home.svg';
import personSvg from '../../img/nav/person.svg';
import skillsSvg from '../../img/nav/skills.svg';
import myWorkSvg from '../../img/nav/myWork.svg';
import contactsSvg from '../../img/nav/contacts.svg';

const Navigation = () => {
  return (
    <NavContainer>
      {/* <NavBattonsSection> */}
      <NavLinkButton
        // style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}
        to="home"
      >
        <IconNav src={homeSvg} alt="icon home" />
        <SpanNavText>Home</SpanNavText>
      </NavLinkButton>
      <NavLinkButton
        // style={({ isActive }) => ({
        //   color: isActive ? 'green' : 'black',
        // })}
        to="about"
      >
        <IconNav src={personSvg} alt="icon home" />
        {/* About */}
      </NavLinkButton>
      <NavLinkButton
        // style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}
        to="skills"
      >
        <IconNav src={skillsSvg} alt="icon home" />
        {/* Skills */}
      </NavLinkButton>
      {/* </NavBattonsSection> */}
      {/* <NavBattonsSection> */}
      <NavLinkButton
        // style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}
        to="mywork"
      >
        <IconNav src={myWorkSvg} alt="icon home" />
        {/* My works */}
      </NavLinkButton>
      <NavLinkButton
        // style={({ isActive }) => ({ color: isActive ? 'green' : 'black' })}
        to="contact"
      >
        <IconNav src={contactsSvg} alt="icon home" />
        {/* Contact */}
      </NavLinkButton>
      {/* </NavBattonsSection> */}
    </NavContainer>
  );
};
export default Navigation;

const NavContainer = styled.nav`
  /* font-family: 'Jacques Francois Shadow'; */
  width: 100px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
  background-color: #9370db;
  margin-left: auto;
  text-transform: uppercase;
`;
// const NavBattonsSection = styled.div`
//   display: flex;
//   justify-content: space-between;
//   :not(:first-child) {
//     margin-top: 10px;
//   }
// `;
const NavLinkButton = styled(NavLink)`
  padding: 20px;
  width: 60px;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  :not(:first-child) {
    margin-top: 20px;
  }
  :active,
  :focus,
  :hover {
    border-radius: 20px;
    background-color: #7b49dd;

    /* transform: translateY(-17px);
    transition: 300ms; */
  }
`;
const IconNav = styled.img`
  width: 46px;
  height: 46px;
  :hover + span {
    display: inline-block;
  }

  /* :hover {
    content: 'Home';
  } */
  /* fill: #ffffff;
  stroke: #ffffff; */
`;
const SpanNavText = styled.span`
  display: none;
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  top: 50%;
  /* margin-top: 10px; */
  /* color: #000000; */
  color: #ffffff;
  :hover {
    display: inline-block;
  }
`;
