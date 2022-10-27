import styled from 'styled-components';
import fon from '../../img/fon.jpg';
const BackgroundContainer = ({ children }) => {
  return <BackgroundWrapper>{children} </BackgroundWrapper>;
};
export default BackgroundContainer;
const BackgroundWrapper = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-image: url(${fon});
  padding: 30px;
  text-align: center;
`;
