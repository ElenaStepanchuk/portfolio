import styled, { keyframes } from 'styled-components';
import React from 'react';

import { PageWrapper } from 'components';
import worktable from '../../img/worktable.jpg';

const Home = () => {
  return (
    <>
      <PageWrapper>
        <LeftPage>
          <HomePhoto src={worktable} alt="photo work table" />
        </LeftPage>
        <RightPage>
          <Text>
            <Span>H</Span>
            <Span>i</Span>
            <Span>!</Span>
          </Text>
          <Text>
            <Span>L</Span>
            <Span>e</Span>
            <Span>t</Span>
            <Span>`</Span>
            <Span>s</Span>
            <Span>&nbsp;</Span>
            <Span>i</Span>
            <Span>n</Span>
            <Span>t</Span>
            <Span>r</Span>
            <Span>o</Span>
            <Span>d</Span>
            <Span>u</Span>
            <Span>c</Span>
            <Span>e</Span>
            <Span>&nbsp;</Span>
            <Span>o</Span>
            <Span>u</Span>
            <Span>r</Span>
            <Span>s</Span>
            <Span>e</Span>
            <Span>l</Span>
            <Span>v</Span>
            <Span>e</Span>
            <Span>s</Span>
            <Span>,</Span>
          </Text>
          <Text>
            <Span>I</Span>
            <Span>`</Span>
            <Span>m</Span>
            <Span>&nbsp;</Span>
            <Span>a</Span>
            <Span>&nbsp;</Span>
            <Span>F</Span>
            <Span>u</Span>
            <Span>l</Span>
            <Span>l</Span>
            <Span>&nbsp;</Span>
            <Span>S</Span>
            <Span>t</Span>
            <Span>a</Span>
            <Span>c</Span>
            <Span>k</Span>
            <Span>&nbsp;</Span>
            <Span>D</Span>
            <Span>e</Span>
            <Span>v</Span>
            <Span>e</Span>
            <Span>l</Span>
            <Span>o</Span>
            <Span>p</Span>
            <Span>e</Span>
            <Span>r</Span>
            <Span>.</Span>
            <Span>.</Span>
            <Span>.</Span>
          </Text>
        </RightPage>
      </PageWrapper>
    </>
  );
};
export default Home;

const LeftPage = styled.div`
  display: flex;
  width: 512px;
  justify-content: center;
  padding: 50px;
`;

const HomePhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-radius: 30px; */
`;

const RightPage = styled.div`
  padding: 50px;
  width: 512px;
`;
const Text = styled.p`
  font-size: 27px;
  color: rgba(121, 99, 78, 1);
  font-weight: bold;
  text-transform: uppercase;
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
  display: inline-block;
  opacity: 0;
  transform: rotate(-180deg) translate(150px, 0);
  animation: ${animation} 0.5s forwards;

  :nth-of-type(1) {
    animation-delay: 1s;
  }
  :nth-of-type(2) {
    animation-delay: 1.05s;
  }
  :nth-of-type(3) {
    animation-delay: 1.1s;
  }
  :nth-of-type(4) {
    animation-delay: 1.15s;
  }
  :nth-of-type(5) {
    animation-delay: 1.2s;
  }
  :nth-of-type(6) {
    animation-delay: 1.25s;
  }
  :nth-of-type(7) {
    animation-delay: 1.3s;
  }
  :nth-of-type(8) {
    animation-delay: 1.35s;
  }
  :nth-of-type(9) {
    animation-delay: 1.4s;
  }
  :nth-of-type(10) {
    animation-delay: 1.45s;
  }
  :nth-of-type(11) {
    animation-delay: 1.5s;
  }
  :nth-of-type(12) {
    animation-delay: 1.55s;
  }
  :nth-of-type(13) {
    animation-delay: 1.6s;
  }
  :nth-of-type(14) {
    animation-delay: 1.65s;
  }
  :nth-of-type(15) {
    animation-delay: 1.7s;
  }
  :nth-of-type(16) {
    animation-delay: 1.75s;
  }
  :nth-of-type(17) {
    animation-delay: 1.8s;
  }
  :nth-of-type(18) {
    animation-delay: 1.85s;
  }
  :nth-of-type(19) {
    animation-delay: 1.9s;
  }
  :nth-of-type(20) {
    animation-delay: 1.95s;
  }
  :nth-of-type(21) {
    animation-delay: 2s;
  }
  :nth-of-type(22) {
    animation-delay: 2.05s;
  }
  :nth-of-type(23) {
    animation-delay: 2.1s;
  }
  :nth-of-type(24) {
    animation-delay: 2.15s;
  }
  :nth-of-type(25) {
    animation-delay: 2.2s;
  }
  :nth-of-type(26) {
    animation-delay: 2.25s;
  }
  :nth-of-type(27) {
    animation-delay: 2.3s;
  }
  :nth-of-type(28) {
    animation-delay: 2.35s;
  }
  :nth-of-type(29) {
    animation-delay: 2.4s;
  }
  // :nth-of-type(30) {
  //   animation-delay: 4.45s;
  // }
  // :nth-of-type(31) {
  //   animation-delay: 4.5s;
  // }
  // :nth-of-type(32) {
  //   animation-delay: 2.55s;
  // }
  // :nth-of-type(33) {
  //   animation-delay: 2.6s;
  // }
  // :nth-of-type(34) {
  //   animation-delay: 2.65s;
  // }
  // :nth-of-type(35) {
  //   animation-delay: 2.7s;
  // }
  // :nth-of-type(36) {
  //   animation-delay: 2.75s;
  // }
  // :nth-of-type(37) {
  //   animation-delay: 2.8s;
  // }
  // :nth-of-type(38) {
  //   animation-delay: 2.85s;
  // }
  // :nth-of-type(39) {
  //   animation-delay: 2.9s;
  // }
`;
