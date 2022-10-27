import { useState } from 'react';

import styled from 'styled-components';

import menuSvg from '../../img/footer/menu.svg';
import linkedinSvg from '../../img/footer/linkedin.svg';
import githubSvg from '../../img/footer/github.svg';
// import facebookSvg from '../../img/footer/facebook.svg';
import instagramSvg from '../../img/footer/instagram.svg';
import twitterSvg from '../../img/footer/twitter.svg';
// import mailSvg from '../../img/footer/mail.svg';
// import skypeSvg from '../../img/footer/skype.svg';
// import viberSvg from '../../img/footer/viber.svg';
// import whatsappSvg from '../../img/footer/whatsapp.svg';

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleShowMenu = () => setIsMenuOpen(isOpen => !isOpen);
  return (
    <footer>
      <FooterButton>
        <IconFooterBtn
          type="button"
          onClick={handleShowMenu}
          src={menuSvg}
          alt="icon home"
        />
      </FooterButton>
      {isMenuOpen && (
        <SocialContainer>
          <SocialLink href="https://www.linkedin.com/in/elena-stepanchuk/">
            <IconSocial src={linkedinSvg} alt="icon linkedin" />
          </SocialLink>
          <SocialLink href="https://github.com/ElenaStepanchuk">
            <IconSocial src={githubSvg} alt="icon github" />
          </SocialLink>
          <SocialLink href="https://www.instagram.com/epodolyak/">
            <IconSocial src={instagramSvg} alt="icon instagram" />
          </SocialLink>
          <SocialLink href="https://twitter.com/Olena365">
            <IconSocial src={twitterSvg} alt="icon twitter" />
          </SocialLink>
        </SocialContainer>
      )}
    </footer>
  );
};
export default Footer;
const FooterButton = styled.button`
  display: flex;
  width: 80px;
  height: 80px;
  /* border-radius: 20px; */
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-left: 80px;
  margin-top: 50px;
  padding: 10px;
  z-index: 5;
  background: linear-gradient(
    90deg,
    rgba(104, 114, 140, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  border: none;
`;
const SocialContainer = styled.div`
  display: flex;
  background: linear-gradient(
    90deg,
    rgba(80, 87, 102, 1) 0%,
    rgba(25, 25, 25, 1) 100%
  );

  padding: 10px;
  width: 210px;
  height: 60px;
  margin-left: 80px;

  text-align: center;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const IconFooterBtn = styled.img`
  width: 60px;
  height: 60px;
`;
const SocialLink = styled.a`
  :not(:first-child) {
    margin-left: 10px;
  }
`;
const IconSocial = styled.img`
  width: 40px;
  height: 40px;
`;
