import { gsap } from 'gsap';

import { PageWrapper } from 'components';

import css from './myWork.module.css';

import styled, { keyframes } from 'styled-components';
import React, { useState } from 'react';
import slide5 from '../../img/myWorks/webStudioPng.png';
import slide4 from '../../img/myWorks/serchPhotoPng.png';
import slide3 from '../../img/myWorks/imageFinderPng.png';
import slide2 from '../../img/myWorks/moviesFinderPng.png';
import slide1 from '../../img/myWorks/phonebookPng.png';

import slide2_1 from '../../img/myWorks/slimMom.png';
import slide2_2 from '../../img/myWorks/filmotekaPng.png';
import slide2_3 from '../../img/myWorks/freedom.png';

import { CSSPlugin } from 'gsap/CSSPlugin';
gsap.registerPlugin(CSSPlugin);

const MyWork = () => {
  const arraySlides = [slide1, slide2, slide3, slide4, slide5];
  const arrayLinks = [
    'https://olenatepanchukhw8.netlify.app/',
    'https://elenastepanchuk365.netlify.app/',
    'https://elenastepanchuk.github.io/goit-react-hw-04-hooks-images/',
    'https://elenastepanchuk.github.io/goit-js-hw-11/',
    'https://elenastepanchuk.github.io/goit-markup-hw-08/index.html',
  ];
  const arrayLinkName = [
    'Phonebook',
    'Movies finder',
    'Finder photos',
    'Serch photos',
    'Web Studio',
  ];

  const arraySlides2 = [slide2_1, slide2_2, slide2_3];
  const arrayLinks2 = [
    'https://slimmom-netlify-calculate-daily-calorie.netlify.app/',
    'https://tsimura.github.io/team-1-js/',
    'https://tsimura.github.io/team-1/',
  ];
  const arrayLinkName2 = ['SlimMom', 'Filmoteka', 'Freedom'];
  const [stateImg, setStateImg] = useState(arraySlides[0]);
  const [stateLink, setStateLink] = useState(arrayLinks[0]);
  const [stateLinkName, setStateLinkName] = useState(arrayLinkName[0]);

  const [stateImg2, setStateImg2] = useState(arraySlides2[0]);
  const [stateLink2, setStateLink2] = useState(arrayLinks2[0]);
  const [stateLinkName2, setStateLinkName2] = useState(arrayLinkName2[0]);

  const LeftButton = () => {
    let i = arraySlides.indexOf(stateImg);
    if (i >= 1) {
      i -= 1;
      setStateImg(arraySlides[i]);
      setStateLink(arrayLinks[i]);
      setStateLinkName(arrayLinkName[i]);
      return;
    }
    setStateImg(arraySlides[4]);
    setStateLink(arrayLinks[4]);
    setStateLinkName(arrayLinkName[4]);
    return;
  };
  const RightButton = () => {
    let i = arraySlides.indexOf(stateImg);
    if (i < arraySlides.length - 1) {
      i += 1;
      setStateImg(arraySlides[i]);
      setStateLink(arrayLinks[i]);
      setStateLinkName(arrayLinkName[i]);
      return;
    }
    setStateImg(arraySlides[0]);
    setStateLink(arrayLinks[0]);
    setStateLinkName(arrayLinkName[0]);
    return;
  };

  const LeftButton2 = () => {
    let i = arraySlides2.indexOf(stateImg2);
    if (i >= 1) {
      i -= 1;
      setStateImg2(arraySlides2[i]);
      setStateLink2(arrayLinks2[i]);
      setStateLinkName2(arrayLinkName2[i]);
      return;
    }
    setStateImg2(arraySlides2[2]);
    setStateLink2(arrayLinks2[4]);
    setStateLinkName2(arrayLinkName2[4]);
    return;
  };
  const RightButton2 = () => {
    let i = arraySlides2.indexOf(stateImg2);
    if (i < arraySlides2.length - 1) {
      i += 1;
      setStateImg2(arraySlides2[i]);
      setStateLink2(arrayLinks2[i]);
      setStateLinkName2(arrayLinkName2[i]);
      return;
    }
    setStateImg2(arraySlides2[0]);
    setStateLink2(arrayLinks2[0]);
    setStateLinkName2(arrayLinkName2[0]);
    return;
  };

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
            <div className={css.list}>
              <div className={css.item}>
                <a className={css.item_link} href={stateLink}>
                  <img
                    className={css.item_img}
                    src={stateImg}
                    alt="project screen"
                  />
                  {stateLinkName}
                </a>
              </div>
            </div>

            <button
              className={css.slider_control}
              type="button"
              onClick={LeftButton}
            >
              <div className={css.slider_control__line}></div>
              <div className={css.slider_control__line}></div>
            </button>

            <button
              className={css.slider_control__right}
              type="button"
              onClick={RightButton}
            >
              <div className={css.slider_control__line__right}></div>
              <div className={css.slider_control__line__right}></div>
            </button>
          </div>
        </div>
        <div className={css.right_page}>
          <Span>C</Span>
          <Span>o</Span>
          <Span>m</Span>
          <Span>m</Span>
          <Span>a</Span>
          <Span>n</Span>
          <Span>d</Span>
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
            <div className={css.list}>
              <div className={css.item}>
                <a className={css.item_link} href={stateLink2}>
                  <img
                    className={css.item_img}
                    src={stateImg2}
                    alt="project screen"
                  />
                  {stateLinkName2}
                </a>
              </div>
            </div>

            <button
              className={css.slider_control2}
              type="button"
              onClick={LeftButton2}
            >
              <div className={css.slider_control__line2}></div>
              <div className={css.slider_control__line2}></div>
            </button>

            <button
              className={css.slider_control__right2}
              type="button"
              onClick={RightButton2}
            >
              <div className={css.slider_control__line__right2}></div>
              <div className={css.slider_control__line__right2}></div>
            </button>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default MyWork;

//----animation------------
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
  :nth-of-type(16) {
    animation-delay: 0.75s;
  }
`;
