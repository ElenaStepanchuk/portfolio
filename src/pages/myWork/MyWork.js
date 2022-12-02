import { gsap } from 'gsap';

import { PageWrapper } from 'components';

import css from './myWork.module.css';

import styled, { keyframes } from 'styled-components';
import React, { useRef } from 'react';
import webStudio from '../../img/myWorks/webStudioPng.png';
import serchPhotos from '../../img/myWorks/serchPhotoPng.png';
import finderPhotos from '../../img/myWorks/imageFinderPng.png';
import mooviesFinder from '../../img/myWorks/moviesFinderPng.png';
import phonebook from '../../img/myWorks/phonebookPng.png';
import { CSSPlugin } from 'gsap/CSSPlugin';
gsap.registerPlugin(CSSPlugin);

const MyWork = () => {
  const el1 = useRef();
  const el2 = useRef();
  const el3 = useRef();
  const el4 = useRef();
  const el5 = useRef();

  let count = 0;

  const arrayElements = [el1, el2, el3, el4, el5];
  gsap.set(arrayElements, { xPercent: 100 });
  gsap.set(arrayElements[0], { xPercent: 0 });

  const LeftButton = () => {
    // gsap.fromTo(
    //   arrayElements[count],
    //   { xPercent: 0, zIndex: 0 },
    //   { delay: 0.2, duration: 1.2, xPercent: 0, zIndex: -10 }
    // );
    // count = count < arrayElements.length - 1 ? ++count : 0;
    // gsap.fromTo(
    //   arrayElements[count],
    //   { xPercent: 100, zIndex: 10 },
    //   { duration: 1.2, xPercent: 0, zIndex: 0 }
    // );
  };
  const RightButton = () => {};

  return (
    <>
      <PageWrapper>
        <div className={css.left_page}>
          <Span>M</Span>
          <Span>y</Span>
          <Span>&nbsp;</Span>
          <Span>o</Span>
          <Span>w</Span>
          <Span>n</Span>
          <Span>&nbsp;</Span>
          <Span>p</Span>
          <Span>r</Span>
          <Span>o</Span>
          <Span>j</Span>
          <Span>e</Span>
          <Span>c</Span>
          <Span>t</Span>
          <Span>s</Span>
          <div className={css.list_wrapper}>
            <button
              className={css.control_button}
              type="button"
              onClick={LeftButton}
            >
              Left
            </button>
            <ul className={css.list}>
              <li className={css.item}>
                <a
                  className={css.item_link}
                  href="https://elenastepanchuk.github.io/goit-markup-hw-08/index.html"
                  ref={el1}
                >
                  <img
                    className={css.item_img}
                    src={webStudio}
                    alt="json icon"
                  />
                  Web Studio
                </a>
              </li>
              <li className={css.item}>
                <a
                  className={css.item_link}
                  href="https://elenastepanchuk.github.io/goit-js-hw-11/"
                  ref={el2}
                >
                  <img
                    className={css.item_img}
                    src={serchPhotos}
                    alt="json icon"
                  />
                  Serch photos
                </a>
              </li>
              <li className={css.item}>
                <a
                  className={css.item_link}
                  href="https://elenastepanchuk.github.io/goit-react-hw-04-hooks-images/"
                  ref={el3}
                >
                  <img
                    className={css.item_img}
                    src={finderPhotos}
                    alt="json icon"
                  />
                  Finder photos
                </a>
              </li>
              <li className={css.item}>
                <a
                  className={css.item_link}
                  href="https://elenastepanchuk365.netlify.app/"
                  ref={el4}
                >
                  <img
                    className={css.item_img}
                    src={mooviesFinder}
                    alt="json icon"
                  />
                  Movies finder
                </a>
              </li>
              <li className={css.item}>
                <a
                  className={css.item_link}
                  href="https://olenatepanchukhw8.netlify.app/"
                  ref={el5}
                >
                  <img
                    className={css.item_img}
                    src={phonebook}
                    alt="json icon"
                  />
                  Phonebook
                </a>
              </li>
            </ul>
            <button
              className={css.control_button}
              type="button"
              onClick={RightButton}
            >
              Right
            </button>
          </div>
        </div>
        <div className={css.right_page}>
          {/* <img src={gitHubRight} alt="json icon" style={{ width: 512 }} /> */}
          <h2>Command projects</h2>
          <ul>
            <li>
              <a href="https://tsimura.github.io/team-1/">Freedom</a>
            </li>
            <li>
              <a href="https://tsimura.github.io/team-1-js/">Filmoteka</a>
            </li>
            <li>
              <a href="https://slimmom-netlify-calculate-daily-calorie.netlify.app/">
                slimmom
              </a>
            </li>
          </ul>
        </div>
      </PageWrapper>
    </>
  );
};
export default MyWork;

//анімація лівої назви сторінки
const animation = keyframes`
  10% {
		opacity: 1;
	}
	100% {
		transform: rotate(0deg) translate(0);
		opacity: 1;
	}
  `;
const Span = styled.span`
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  display: inline-block;
  color: rgba(121, 99, 78, 1);
  opacity: 0;
  transform: rotate(-180deg) translate(150px, 0);
  animation: ${animation} 0.5s forwards;

  :nth-of-type(2) {
    animation-delay: 0.05s;
  }
  :nth-of-type(3) {
    animation-delay: 0.1s;
  }
  :nth-of-type(4) {
    animation-delay: 0.15s;
  }
  :nth-of-type(5) {
    animation-delay: 0.2s;
  }
  :nth-of-type(6) {
    animation-delay: 0.25s;
  }
  :nth-of-type(7) {
    animation-delay: 0.3s;
  }
  :nth-of-type(8) {
    animation-delay: 0.35s;
  }
  :nth-of-type(9) {
    animation-delay: 0.4s;
  }
  :nth-of-type(10) {
    animation-delay: 0.45s;
  }
  :nth-of-type(11) {
    animation-delay: 0.5s;
  }
  :nth-of-type(12) {
    animation-delay: 0.55s;
  }
  :nth-of-type(13) {
    animation-delay: 0.6s;
  }
  :nth-of-type(14) {
    animation-delay: 0.65s;
  }
  :nth-of-type(15) {
    animation-delay: 0.7s;
  }
`;
