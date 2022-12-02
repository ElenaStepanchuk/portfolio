import { gsap } from 'gsap';

import { PageWrapper } from 'components';

import styled, { keyframes } from 'styled-components';
import React, { useRef, useEffect } from 'react';
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

  let count = 0;

  const arrayElements = [el1, el2, el3];
  gsap.set(arrayElements, { xPercent: 100 });
  gsap.set(arrayElements[0], { xPercent: 0 });
  const LeftButton = () => {
    // console.log('arrayElements', arrayElements);
    // const intervalBlock = 2;
    // const sliders = 3;
    // for (let i = 0; i < sliders; i++) {
    //   const element = arrayElements[i];
    //   gsap.to(element.current, {
    //     duration: intervalBlock,
    //     x: 290,
    //   });
    // }
    // for (let i = 1; i < sliders; i++) {
    //   const element = arrayElements[i];
    //   gsap.to(element.current, {
    //     duration: intervalBlock,
    //     x: -290,
    //   });
    // }
    gsap.fromTo(
      arrayElements[count],
      { xPercent: 0, zIndex: 0 },
      { delay: 0.2, duration: 1.2, xPercent: 0, zIndex: -10 }
    );
    count = count < arrayElements.length - 1 ? ++count : 0;
    gsap.fromTo(
      arrayElements[count],
      { xPercent: 100, zIndex: 10 },
      { duration: 1.2, xPercent: 0, zIndex: 0 }
    );
  };
  const RightButton = () => {
    // const intervalBlock = 2;
    // gsap.to(el1.current, {
    //   duration: intervalBlock,
    //   x: 0,
    // });
    // gsap.to(el2.current, {
    //   duration: intervalBlock,
    //   x: 290,
    // });
  };
  return (
    <>
      <PageWrapper>
        <LeftPage>
          {/* <img src={gitHubLeft} alt="json icon" style={{ width: 512 }} /> */}
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
          <UlWrapper>
            <ControlButton type="button" onClick={LeftButton}>
              Left
            </ControlButton>
            <Ul>
              <LeftPageItem>
                <LinkItem
                  href="https://elenastepanchuk.github.io/goit-markup-hw-08/index.html"
                  ref={el1}
                >
                  <WorkImg src={webStudio} alt="json icon" />
                  Web Studio
                </LinkItem>
              </LeftPageItem>
              <LeftPageItem>
                <LinkItem
                  href="https://elenastepanchuk.github.io/goit-js-hw-11/"
                  ref={el2}
                >
                  <WorkImg src={serchPhotos} alt="json icon" />
                  Serch photos
                </LinkItem>
              </LeftPageItem>
              <LeftPageItem>
                <LinkItem
                  href="https://elenastepanchuk.github.io/goit-react-hw-04-hooks-images/"
                  ref={el3}
                >
                  <WorkImg src={finderPhotos} alt="json icon" />
                  Finder photos
                </LinkItem>
              </LeftPageItem>
              {/* <LeftPageItem>
                <LinkItem href="https://elenastepanchuk365.netlify.app/">
                  <WorkImg src={mooviesFinder} alt="json icon" />
                  Movies finder
                </LinkItem>
              </LeftPageItem>
              <LeftPageItem>
                <LinkItem href="https://olenatepanchukhw8.netlify.app/">
                  <WorkImg src={phonebook} alt="json icon" />
                  Phonebook
                </LinkItem>
              </LeftPageItem> */}
            </Ul>
            <ControlButton type="button" onClick={RightButton}>
              Right
            </ControlButton>
          </UlWrapper>
        </LeftPage>
        <RightPage>
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
        </RightPage>
      </PageWrapper>
    </>
  );
};
export default MyWork;

const LeftPage = styled.div`
  width: 512px;
  padding: 50px;
  // justify-content: center;
  text-align: center;
`;
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
const ControlButton = styled.button`
  width: 45px;
  height: 30px;
  padding: 5px;
  font-size: 15px;
  margin-right: 10px;
  margin-left: 10px;
  margin-top: auto;
  margin-bottom: auto;
`;
const UlWrapper = styled.div`
  display: flex;
`;
const Ul = styled.ul`
  overflow: hidden;
  display: flex;
`;

const LeftPageItem = styled.li`
  display: flex;
  justify-content: center;
  /* position: absolute; */
  /* z-index: 1; */
  :not(:last-child) {
    /* margin-left: 10px; */
    /* margin-right: 10px; */
  }
  // flex-wrap: wrap;
`;
const LinkItem = styled.a`
  color: rgba(121, 99, 78, 1);
  font-style: italic;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  /* opacity: 0; */
`;

const WorkImg = styled.img`
  width: 290px;
  display: block;
  margin-bottom: 10px;
`;

const RightPage = styled.div`
  padding: 50px;
  width: 512px;
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: center;
  // text-align: center;
`;
