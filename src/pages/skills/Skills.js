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
  const el6 = useRef();
  const el7 = useRef();
  const el8 = useRef();
  const el9 = useRef();
  const el10 = useRef();
  const el11 = useRef();
  const el12 = useRef();
  const el13 = useRef();

  useEffect(() => {
    const arrayElements = [
      el1.current,
      el2.current,
      el3.current,
      el4.current,
      el5.current,
    ];

    const intervalBlock = 120;
    const intervalImg = 120;
    // const transactionY = 600;
    // const transactionX = 50;

    gsap.to(el1.current, {
      repeat: -1,
      duration: intervalBlock,
      rotation: '+=360',
      yoyo: true,
    });
    gsap.to(el2.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el3.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el4.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el5.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el6.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el7.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el8.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el9.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el10.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el11.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el12.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
    gsap.to(el13.current, {
      repeat: -1,
      duration: intervalImg,
      rotation: '-=360',
      yoyo: true,
    });
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
            <ContainerPng1
              style={{ width: 50, height: 50, background: 'rgba(121,99,78,1)' }}
            ></ContainerPng1>
            <ContainerPng1
              style={{
                width: 100,
                height: 100,
                marginTop: -25,
                marginLeft: -25,
              }}
            >
              <SkillsIcon src={cssPng} alt="css icon" ref={el2} />
              <SkillsIcon
                src={gitPng}
                alt="git icon"
                ref={el3}
                style={{ marginLeft: 78 }}
              />
            </ContainerPng1>
            <ContainerPng1
              style={{
                width: 150,
                height: 150,
                marginTop: -50,
                marginLeft: -50,
              }}
            >
              <SkillsIcon
                src={htmlPng}
                alt="htm icon"
                ref={el4}
                style={{ marginTop: 70, marginLeft: -15 }}
              />
              <SkillsIcon
                src={jsPng}
                alt="js icon"
                ref={el5}
                style={{ marginTop: -115, marginLeft: 80 }}
              />
            </ContainerPng1>
            <ContainerPng1
              style={{
                width: 210,
                height: 210,
                marginTop: -80,
                marginLeft: -80,
              }}
            >
              <SkillsIcon
                src={jsonPng}
                alt="json icon"
                style={{ marginTop: 30 }}
                ref={el6}
              />
              <SkillsIcon
                src={mongodbPng}
                alt="mongodb icon"
                style={{ marginTop: 0, marginLeft: 190 }}
                ref={el7}
              />
              <SkillsIcon
                src={nodePng}
                alt="node icon"
                style={{ marginTop: 60, marginLeft: 120 }}
                ref={el8}
              />
            </ContainerPng1>
            <ContainerPng1
              style={{
                width: 280,
                height: 280,
                marginTop: -115,
                marginLeft: -115,
              }}
            >
              <SkillsIcon
                src={postmanPng}
                alt="postman icon"
                style={{ marginTop: -15, marginLeft: 100 }}
                ref={el9}
              />
              <SkillsIcon
                src={reactPng}
                alt="react icon"
                style={{ marginTop: 30, marginLeft: 240 }}
                ref={el10}
              />
              <SkillsIcon
                src={reduxPng}
                alt="redux icon"
                style={{ marginTop: 120, marginLeft: 240 }}
                ref={el11}
              />
              <SkillsIcon
                src={styledComponentPng}
                alt="styled component icon"
                style={{ marginTop: 25, marginLeft: 90 }}
                ref={el12}
              />
              <SkillsIcon
                src={webpackPng}
                alt="webpack icon"
                style={{ marginTop: -110, marginLeft: -5 }}
                ref={el13}
              />
            </ContainerPng1>
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
  width: 100%;
  height: 100%;
`;
const ContainerPng1 = styled.div`
  // margin: auto;
  position: absolute;
  top: calc(42%);
  left: calc(44%);
  border: 1px solid rgba(121, 99, 78, 1);
  // width: 140px;
  // height: 140px;
  border-radius: 50%;
`;

const SkillsIcon = styled.img`
  width: 32px;
  height: 32px;
  display: block;
  /* object-fit: cover; */
  /* border-radius: 30px; */
`;
