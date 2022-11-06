import styled from 'styled-components';
import React from 'react';
import { PageWrapper } from 'components/pageWrapper/PageWrapper';
import worktable from '../../img/worktable.jpg';
// import { HomeAnimations } from 'components';
// import SocialBtn from 'components/socialBtn';

const Home = () => {
  return (
    <>
      <PageWrapper>
        <LeftPage>
          <HomePhoto src={worktable} alt="photo work table" />
        </LeftPage>
        <RightPage>
          {/* <HomePhoto src={worktable} alt="photo work table" /> */}
          {/* <HomeAnimations /> */}
        </RightPage>
        {/* <SocialBtn /> */}
      </PageWrapper>
    </>
  );
};
export default Home;

const LeftPage = styled.div`
  display: flex;
  width: 462px;
  overflow: hidden;
  justify-content: center;
  padding-right: 50px;
`;

const HomePhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const RightPage = styled.div`
  display: flex;
  width: 462px;
  overflow: hidden;
  justify-content: center;
  padding-left: 50px;
`;
