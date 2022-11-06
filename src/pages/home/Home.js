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
  border-radius: 5px;
`;

const RightPage = styled.div`
  display: flex;
  width: 512px;
  /* overflow: hidden; */
  justify-content: center;
  text-align: start;
  padding-left: 50px;
`;
