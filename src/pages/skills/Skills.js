import styled, { keyframes } from 'styled-components';
import React, { useRef, useEffect } from 'react';
import cssPng from '../../img/skills/css.png';
import gitPng from '../../img/skills/git.png';
import htmlPng from '../../img/skills/html.png';
import jsPng from '../../img/skills/js.png';
import jsonPng from '../../img/skills/json.png';
import mongodbPng from '../../img/skills/mongodb.png';
import nodePng from '../../img/skills/node.png';
import postmanPng from '../../img/skills/postman.png';
import reactPng from '../../img/skills/react.png';
import reduxPng from '../../img/skills/redux.png';
import styledComponentPng from '../../img/skills/styledComponent.png';
import webpackPng from '../../img/skills/webpack.png';
// import { Canvas } from 'components';

import { gsap } from 'gsap';

import { PageWrapper } from 'components';

const Skills = () => {
  const el1 = useRef();
  const el2 = useRef();
  const el3 = useRef();
  const el4 = useRef();
  const el5 = useRef();

  useEffect(() => {
    const arrayElements = [
      el1.current,
      el2.current,
      el3.current,
      el4.current,
      el5.current,
    ];

    const intervalBlock = 10;
    const intervalImg = 10;
    // const transactionY = 600;
    // const transactionX = 50;

    // gsap.to(el1.current, {
    //   repeat: -1,
    //   duration: intervalBlock,
    //   rotation: '+=360',
    //   yoyo: true,
    // });
    // gsap.to(el2.current, {
    //   repeat: -1,
    //   duration: intervalImg,
    //   rotation: '-=360',
    //   yoyo: true,
    // });
    // gsap.to(el3.current, {
    //   repeat: -1,
    //   duration: intervalImg,
    //   rotation: '-=360',
    //   yoyo: true,
    // });
    // gsap.to(el4.current, {
    //   repeat: -1,
    //   duration: intervalImg,
    //   rotation: '-=360',
    //   yoyo: true,
    // });
    // gsap.to(el5.current, {
    //   repeat: -1,
    //   duration: intervalImg,
    //   rotation: '-=360',
    //   yoyo: true,
    // });
  });

  return (
    <>
      <PageWrapper>
        <LeftPage>
          <Span>M</Span>
          <Span>y</Span>
          <Span>&nbsp;</Span>
          <Span>s</Span>
          <Span>k</Span>
          <Span>i</Span>
          <Span>l</Span>
          <Span>l</Span>
          <Span>s</Span>
          <Span>:</Span>
          <SkillsList>
            <ItemList>HTML, HTML5</ItemList>
            <ItemList>CSS, CSS3, SCSS, SASS, Css Modules</ItemList>
            <ItemList>Styled Components</ItemList>
            <ItemList>Flex Box</ItemList>
            <ItemList>ES6, ES6+</ItemList>
            <ItemList>Git</ItemList>
            <ItemList>JSON</ItemList>
            <ItemList>WebPack</ItemList>
            <ItemList>Java Script</ItemList>
            <ItemList>REST API</ItemList>
            <ItemList>AJAX</ItemList>
            <ItemList>React JS, React Hooks, React Router</ItemList>
            <ItemList>React Native</ItemList>
            <ItemList>Redux</ItemList>
            <ItemList>Node.js</ItemList>
            <ItemList>Postman</ItemList>
            <ItemList>MongoDB</ItemList>
            <ItemList>Mongoose</ItemList>
            <ItemList>Adaptive and responsive layout</ItemList>
            <ItemList>Figma</ItemList>
          </SkillsList>
        </LeftPage>
        <RightPage>
          {/* <Canvas style={{ background: '#FFFFFF' }} /> */}
          <ContainerPng ref={el1}>
            <ContainerPng1 ref={el1} style={{ width: 80, height: 80 }}>
              <SkillsIcon src={cssPng} alt="css icon" ref={el2} />
            </ContainerPng1>
            <ContainerPng1 ref={el1} style={{ width: 100, height: 100 }}>
              <SkillsIcon
                src={gitPng}
                alt="git icon"
                // ref={el3}
                // style={{ marginLeft: 16, marginTop: 10 }}
              />
            </ContainerPng1>
            <ContainerPng1 ref={el1} style={{ width: 120, height: 120 }}>
              <SkillsIcon
                src={htmlPng}
                alt="htm icon"
                // ref={el4}
                // style={{ marginRight: -16, marginTop: 30 }}
              />
            </ContainerPng1>
            <SkillsIcon
              src={jsPng}
              alt="js icon"
              ref={el5}
              style={{ marginLeft: 48, marginTop: -30 }}
            />
            <SkillsIcon
              src={jsonPng}
              alt="json icon"
              style={{ marginLeft: -26, marginTop: 40 }}
            />
            <SkillsIcon src={mongodbPng} alt="mongodb icon" />
            <SkillsIcon src={nodePng} alt="node icon" />
            <SkillsIcon src={postmanPng} alt="postman icon" />
            <SkillsIcon src={reactPng} alt="react icon" />
            <SkillsIcon src={reduxPng} alt="redux icon" />
            <SkillsIcon src={styledComponentPng} alt="styled component icon" />
            <SkillsIcon src={webpackPng} alt="webpack icon" />
          </ContainerPng>
          {/* <SkillsIcon src={gitPng} alt="git icon" /> */}
          {/* <SkillsIcon src={htmlPng} alt="htm icon" /> */}
          {/* <SkillsIcon src={jsPng} alt="js icon" />
          <SkillsIcon src={jsonPng} alt="json icon" />
          <SkillsIcon src={mongodbPng} alt="mongodb icon" />
          <SkillsIcon src={nodePng} alt="node icon" />
          <SkillsIcon src={postmanPng} alt="postman icon" />
          <SkillsIcon src={reactPng} alt="react icon" />
          <SkillsIcon src={reduxPng} alt="redux icon" />
          <SkillsIcon src={styledComponentPng} alt="styled component icon" />
          <SkillsIcon src={webpackPng} alt="webpack icon" /> */}
        </RightPage>
      </PageWrapper>
    </>
  );
};
export default Skills;

const LeftPage = styled.div`
  width: 512px;
  padding: 50px;
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
`;

const SkillsList = styled.ul`
  padding: 0 0 0 15px;
  margin: 10px 0 0 0;
`;
const ItemList = styled.li`
  color: rgba(121, 99, 78, 1);
  font-style: italic;
  font-size: 12px;
  font-weight: bold;
  text-align: justify;
  opacity: 0;
  transform: rotate(-5deg) translate(-650px, 0);
  animation: ${animation} 1s forwards;
  animation-delay: 1s;
  :nth-of-type(20) {
    animation-delay: 10.5s;
  }
  :nth-of-type(19) {
    animation-delay: 10s;
  }
  :nth-of-type(18) {
    animation-delay: 9.5s;
  }
  :nth-of-type(17) {
    animation-delay: 9s;
  }
  :nth-of-type(16) {
    animation-delay: 8.5s;
  }
  :nth-of-type(15) {
    animation-delay: 8s;
  }
  :nth-of-type(14) {
    animation-delay: 7.5s;
  }
  :nth-of-type(13) {
    animation-delay: 7s;
  }
  :nth-of-type(12) {
    animation-delay: 6.5s;
  }
  :nth-of-type(11) {
    animation-delay: 6s;
  }
  :nth-of-type(10) {
    animation-delay: 5.5s;
  }
  :nth-of-type(9) {
    animation-delay: 5s;
  }
  :nth-of-type(8) {
    animation-delay: 4.5s;
  }
  :nth-of-type(7) {
    animation-delay: 4s;
  }
  :nth-of-type(6) {
    animation-delay: 3.5s;
  }
  :nth-of-type(5) {
    animation-delay: 3s;
  }

  :nth-of-type(4) {
    animation-delay: 2.5s;
  }
  :nth-of-type(3) {
    animation-delay: 2s;
  }
  :nth-of-type(2) {
    animation-delay: 1.5s;
  }
`;
const RightPage = styled.div`
  padding: 50px;
  width: 512px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

const ContainerPng = styled.div`
  margin: auto;
  position: relative;
  border: 1px solid #000000;
  width: 100%;
  height: 100%;
  // border-radius: 50%;
`;
const ContainerPng1 = styled.div`
  // margin: auto;
  position: absolute;
  top: calc(33% + 20px);
  left: calc(33% + 20px);
  border: 1px solid #000000;
  // width: 140px;
  // height: 140px;
  border-radius: 50%;
`;

const SkillsIcon = styled.img`
  width: 36px;
  height: 36px;
  display: block;
  /* object-fit: cover; */
  /* border-radius: 30px; */
`;
