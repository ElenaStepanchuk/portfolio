import styled from 'styled-components';
import React from 'react';

import { PageWrapper } from 'components/pageWrapper/PageWrapper';
import worktable from '../../img/worktable.jpg';
// import { DollarsAnimation } from 'components';

// import SocialBtn from 'components/socialBtn';

const Home = () => {
  return (
    <>
      <PageWrapper>
        <LeftPage>
          {/* <DollarsAnimation /> */}
          <HomePhoto src={worktable} alt="photo work table" />
        </LeftPage>
        <RightPage>
          <Text>Hi!</Text>
          <Text> Let`s get acquainted,</Text>
          <Text> I`m a Full Stack Developer...</Text>
          {/* <DollarsAnimation /> */}
          {/* <RightPageHome /> */}
          {/* <canvas
            id="canvas"
            width="200"
            height="100"
            className={css.canvas_styles}
          ></canvas> */}
        </RightPage>
      </PageWrapper>
    </>
  );
};
export default Home;

const LeftPage = styled.div`
  display: flex;
  width: 512px;
  /* overflow: hidden; */
  justify-content: center;
  padding: 50px;
`;

const HomePhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
`;

const RightPage = styled.div`
  // display: flex;
  // flex-wrap: wrap;
  // overflow: hidden;
  // justify-content: center;
  // text-align: start;

  padding: 50px;
  width: 512px;
`;
const Text = styled.p`
  font-size: 27px;
  color: rgba(121, 99, 78, 1);
  font-weight: bold;
  text-transform: uppercase;
`;
