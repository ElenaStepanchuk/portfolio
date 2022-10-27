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
      <NavLinkButton to="home">
        <IconNav src={homeSvg} alt="icon home" />
        <SpanNavText>Home</SpanNavText>
      </NavLinkButton>
      <NavLinkButton to="about">
        <IconNav src={personSvg} alt="icon person" />
        <SpanNavText>About</SpanNavText>
      </NavLinkButton>
      <NavLinkButton to="skills">
        <IconNav src={skillsSvg} alt="icon skills" />
        <SpanNavText>Skills</SpanNavText>
      </NavLinkButton>
      <NavLinkButton to="mywork">
        <IconNav src={myWorkSvg} alt="icon ny work" />
        <SpanNavText>My works</SpanNavText>
      </NavLinkButton>
      <NavLinkButton to="contact">
        <IconNav src={contactsSvg} alt="icon contact" />
        <SpanNavText>Contact</SpanNavText>
      </NavLinkButton>
    </NavContainer>
  );
};
export default Navigation;

const NavContainer = styled.nav`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
  /* background-color: #9370db; */
  background: linear-gradient(
    90deg,
    rgba(80, 87, 102, 1) 0%,
    rgba(25, 25, 25, 1) 100%
  );
  margin-left: auto;
  text-transform: uppercase;
  position: absolute;
  top: 50px;
  right: 50px;
`;

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
  transition: all 500ms ease;

  :not(:first-child) {
    margin-top: 20px;
  }

  :active,
  :focus {
    border-radius: 20px;
    /* #7b49dd */
    background: linear-gradient(
      90deg,
      rgba(104, 114, 140, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  :hover .SpanNavText {
    display: block;
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 0;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    transition: all 1s ease;
  }

  :hover:before {
    height: 100%;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }
`;
const IconNav = styled.img`
  width: 46px;
  height: 46px;
  fill: #ffffff;
`;
const SpanNavText = styled.span`
  font-size: 12px;
  font-weight: bold;
  margin-top: 5px;
  color: #ffffff;
`;
