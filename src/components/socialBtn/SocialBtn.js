import { useState } from 'react';

import styled from 'styled-components';

import menuSvg from '../../img/socialBtn/menu.svg';
import linkedinSvg from '../../img/socialBtn/linkedin.svg';
import githubSvg from '../../img/socialBtn/github.svg';
import mailSvg from '../../img/socialBtn/mail.svg';
import skypeSvg from '../../img/socialBtn/skype.svg';
import viberSvg from '../../img/socialBtn/viber.svg';
import whatsappSvg from '../../img/socialBtn/whatsapp.svg';
import telegramSvg from '../../img/socialBtn/telegram.svg';

const SocialBtn = () => {
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
          <SocialLink
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/elena-stepanchuk/"
          >
            <IconSocial src={linkedinSvg} alt="icon linkedin" />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ElenaStepanchuk"
          >
            <IconSocial src={githubSvg} alt="icon github" />
          </SocialLink>
          <SocialLink target="_blank" rel="noreferrer" href="skype:pelena365">
            <IconSocial src={skypeSvg} alt="icon skype" />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noreferrer"
            href="viber:+380636952590"
          >
            <IconSocial src={viberSvg} alt="icon viber" />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noreferrer"
            href="whatsapp:+380636952590"
          >
            <IconSocial src={whatsappSvg} alt="icon whatsapp" />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noreferrer"
            href="https://t.me/Alenka3657"
          >
            <IconSocial src={telegramSvg} alt="icon telegram" />
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noreferrer"
            href="mailto: podolyak365@mail.com"
          >
            <IconSocial src={mailSvg} alt="icon email" />
          </SocialLink>
        </SocialContainer>
      )}
    </footer>
  );
};
export default SocialBtn;
const FooterButton = styled.button`
  display: flex;
  width: 80px;
  height: 80px;
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
    rgba(80, 87, 102, 0.5) 0%,
    rgba(25, 25, 25, 0.5) 100%
  );

  padding: 10px;
  width: 360px;
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
