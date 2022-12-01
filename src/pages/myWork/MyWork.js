import { gsap } from 'gsap';

import { PageWrapper } from 'components';

import styled, { keyframes } from 'styled-components';
import React, { useRef, useEffect } from 'react';
import webStudio from '../../img/myWorks/webStudioPng.png';
import serchPhotos from '../../img/myWorks/serchPhotoPng.png';
import finderPhotos from '../../img/myWorks/imageFinderPng.png';
import mooviesFinder from '../../img/myWorks/moviesFinderPng.png';
import phonebook from '../../img/myWorks/phonebookPng.png';

const MyWork = () => {
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
          <Ul>
            <LeftPageItem>
              <LinkItem href="https://elenastepanchuk.github.io/goit-markup-hw-08/index.html">
                <WorkImg
                  src={webStudio}
                  alt="json icon"
                  style={{ width: 412 }}
                />
                Web Studio
              </LinkItem>
            </LeftPageItem>
            <LeftPageItem>
              <LinkItem href="https://elenastepanchuk.github.io/goit-js-hw-11/">
                <WorkImg
                  src={serchPhotos}
                  alt="json icon"
                  style={{ width: 412 }}
                />
                Serch photos
              </LinkItem>
            </LeftPageItem>
            <LeftPageItem>
              <LinkItem href="https://elenastepanchuk.github.io/goit-react-hw-04-hooks-images/">
                <WorkImg
                  src={finderPhotos}
                  alt="json icon"
                  style={{ width: 412 }}
                />
                Finder photos
              </LinkItem>
            </LeftPageItem>
            <LeftPageItem>
              <LinkItem href="https://elenastepanchuk365.netlify.app/">
                <WorkImg
                  src={mooviesFinder}
                  alt="json icon"
                  style={{ width: 412 }}
                />
                Movies finder
              </LinkItem>
            </LeftPageItem>
            <LeftPageItem>
              <LinkItem href="https://olenatepanchukhw8.netlify.app/">
                <WorkImg
                  src={phonebook}
                  alt="json icon"
                  style={{ width: 412 }}
                />
                Phonebook
              </LinkItem>
            </LeftPageItem>
          </Ul>
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
const Ul = styled.ul`
  height: 240px;
  overflow: auto;
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
const LeftPageItem = styled.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 10px;
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
`;
const WorkImg = styled.img`
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
