import styled, { keyframes } from 'styled-components';
import HomePageWrapper from 'components/pageWrapper/PageWrapper';

const Home = () => {
  return (
    <HomePageWrapper>
      <TitlePage>
        <Span>&lt;</Span>
        <Span>&nbsp;</Span>
        <Span>H</Span>
        <Span>i</Span>
        <Span>,</Span>
      </TitlePage>
      <Text>
        <Span>T</Span>
        <Span>h</Span>
        <Span>i</Span>
        <Span>s</Span>
        <Span>&nbsp;</Span>
        <Span>i</Span>
        <Span>s</Span>
        <Span>&nbsp;</Span>
        <Span>O</Span>
        <Span>l</Span>
        <Span>e</Span>
        <Span>n</Span>
        <Span>a</Span>
        <Span>&nbsp;</Span>
        <Span>S</Span>
        <Span>t</Span>
        <Span>e</Span>
        <Span>p</Span>
        <Span>a</Span>
        <Span>n</Span>
        <Span>c</Span>
        <Span>h</Span>
        <Span>u</Span>
        <Span>k</Span>
        <Span>&nbsp;</Span>
        <Span>w</Span>
        <Span>e</Span>
        <Span>b</Span>
        <Span>&nbsp;</Span>
        <Span>d</Span>
        <Span>e</Span>
        <Span>v</Span>
        <Span>e</Span>
        <Span>l</Span>
        <Span>o</Span>
        <Span>p</Span>
        <Span>e</Span>
        <Span>r</Span>
        <Span>.</Span>
        <Span>&nbsp;</Span>
        <Span>&gt;</Span>
      </Text>
    </HomePageWrapper>
  );
};
export default Home;
const TitlePage = styled.div`
  font-family: 'Jacques Francois Shadow';
  margin-top: 50px;
  font-size: 35px;
  text-align: start;
  /* color: rgb(80, 87, 102); */
`;
const animation = keyframes`
/* 60% {
		transform: translate(20px, 20px) rotate(30deg) scale(.3);
	}
	100% {
		transform: translate(0) rotate(0) scale(1);
		opacity: 1;
	} */
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
  color: rgb(80, 87, 102);
  opacity: 0;
  /* transform: translate(-150px, -50px) rotate(-180deg) scale(3);
  animation: ${animation} 1s forwards; */
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
  :nth-of-type(17) {
    animation-delay: 0.8s;
  }
  :nth-of-type(18) {
    animation-delay: 0.85s;
  }
  :nth-of-type(19) {
    animation-delay: 0.9s;
  }
  :nth-of-type(20) {
    animation-delay: 0.95s;
  }
  :nth-of-type(21) {
    animation-delay: 1s;
  }
  :nth-of-type(22) {
    animation-delay: 1.05s;
  }
  :nth-of-type(23) {
    animation-delay: 1.1s;
  }
  :nth-of-type(24) {
    animation-delay: 1.15s;
  }
  :nth-of-type(25) {
    animation-delay: 1.2s;
  }
  :nth-of-type(26) {
    animation-delay: 1.25s;
  }
  :nth-of-type(27) {
    animation-delay: 1.3s;
  }
  :nth-of-type(28) {
    animation-delay: 1.35s;
  }
  :nth-of-type(29) {
    animation-delay: 1.4s;
  }
  :nth-of-type(30) {
    animation-delay: 1.45s;
  }
  :nth-of-type(31) {
    animation-delay: 1.5s;
  }
  :nth-of-type(32) {
    animation-delay: 1.55s;
  }
  :nth-of-type(33) {
    animation-delay: 1.6s;
  }
  :nth-of-type(34) {
    animation-delay: 1.65s;
  }
  :nth-of-type(35) {
    animation-delay: 1.7s;
  }
  :nth-of-type(36) {
    animation-delay: 1.75s;
  }
  :nth-of-type(37) {
    animation-delay: 1.8s;
  }
  :nth-of-type(38) {
    animation-delay: 1.85s;
  }
  :nth-of-type(39) {
    animation-delay: 1.9s;
  }
  :nth-of-type(40) {
    animation-delay: 1.95s;
  }
  :nth-of-type(41) {
    animation-delay: 2s;
  }
`;
const Text = styled.div`
  font-family: 'Jacques Francois Shadow';
  font-size: 35px;
  text-align: start;
  color: rgb(80, 87, 102);
  margin-bottom: 50px;
`;
