import styled from 'styled-components';

const HomePageWrapper = ({ children }) => {
  return <Wrapper>{children} </Wrapper>;
};
export default HomePageWrapper;
const Wrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  margin-left: 80px;
  padding: 30px;
  width: 550px;
  height: auto;
  text-align: center;
`;
