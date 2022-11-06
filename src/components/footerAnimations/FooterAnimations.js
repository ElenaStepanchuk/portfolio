// import styled from 'styled-components';
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';

import css from './footerAnimation.module.css';

import linkedinSvg from '../../img/socialBtn/linkedin.svg';
import githubSvg from '../../img/socialBtn/github.svg';
import skypeSvg from '../../img/socialBtn/skype.svg';
import viberSvg from '../../img/socialBtn/viber.svg';
import whatsappSvg from '../../img/socialBtn/whatsapp.svg';
import telegramSvg from '../../img/socialBtn/telegram.svg';
import mailSvg from '../../img/socialBtn/mail.svg';

const FooterAnimations = () => {
  const el1 = useRef();
  const el2 = useRef();
  const el3 = useRef();
  const el4 = useRef();
  const el5 = useRef();
  const el6 = useRef();
  const el7 = useRef();

  useEffect(() => {
    const arrayElements = [
      el1.current,
      el2.current,
      el3.current,
      el4.current,
      el5.current,
      el6.current,
      el7.current,
    ];

    gsap.to(arrayElements, {
      x: -512,
      // repeat: 1,
      duration: 3,
      //   rotation: '+=360',
      // yoyo: true,
    });
  });

  return (
    <div className={css.container_animation}>
      <a
        className={css.link_animation}
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/elena-stepanchuk/"
      >
        <img
          className={css.img_animation}
          src={linkedinSvg}
          alt="icon linkedin"
          ref={el1}
        />
      </a>
      <a
        className={css.link_animation}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/ElenaStepanchuk"
      >
        <img
          className={css.img_animation}
          src={githubSvg}
          alt="icon github"
          ref={el2}
        />
      </a>
      <a
        className={css.link_animation}
        target="_blank"
        rel="noreferrer"
        href="skype:pelena365"
      >
        <img
          className={css.img_animation}
          src={skypeSvg}
          alt="icon skype"
          ref={el3}
        />
      </a>
      <a
        className={css.link_animation}
        target="_blank"
        rel="noreferrer"
        href="viber:+380636952590"
      >
        <img
          className={css.img_animation}
          src={viberSvg}
          alt="icon viber"
          ref={el4}
        />
      </a>
      <a
        className={css.link_animation}
        target="_blank"
        rel="noreferrer"
        href="whatsapp:+380636952590"
      >
        <img
          className={css.img_animation}
          src={whatsappSvg}
          alt="icon whatsapp"
          ref={el5}
        />
      </a>
      <a
        className={css.link_animation}
        target="_blank"
        rel="noreferrer"
        href="https://t.me/Alenka3657"
      >
        <img
          className={css.img_animation}
          src={telegramSvg}
          alt="icon telegram"
          ref={el6}
        />
      </a>
      <a
        className={css.link_animation}
        target="_blank"
        rel="noreferrer"
        href="mailto: podolyak365@mail.com"
      >
        <img
          className={css.img_animation}
          src={mailSvg}
          alt="icon email"
          ref={el7}
        />
      </a>
    </div>
  );
};

export default FooterAnimations;
