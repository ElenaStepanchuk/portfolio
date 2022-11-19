import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';
// setTimeout(() => {}, 2000);
const Loader = () => {
  // setTimeout(() => {
  return (
    <ContainerLoad>
      <RotatingLines
        strokeColor="rgba(121,99,78,1)"
        strokeWidth="5"
        animationDuration="0.75"
        width="196"
        visible={true}
      />
    </ContainerLoad>
  );
  // }, 200);
};
export default Loader;

const ContainerLoad = styled.div`
  margin-top: 100px;
  text-align: center;
`;
