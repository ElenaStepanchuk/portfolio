import styled from 'styled-components';
import bg from '../../img/bg/bg.jpg';

const PageWrapper = ({ children }) => {
  return <Wrapper>{children} </Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  background-size: cover;
  background-image: url(${bg});
  margin-left: auto;
  margin-right: auto;
  max-width: 1024px;
  max-height: 1200px;
  display: flex;
`;

export { PageWrapper };
