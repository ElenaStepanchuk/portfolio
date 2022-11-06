import styled from 'styled-components';

import { FooterAnimations } from 'components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterAnimations />
    </FooterContainer>
  );
};
export default Footer;
const FooterContainer = styled.div`
  display: flex;
  // background: rgba(242, 237, 233, 1);
  overflow: hidden;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 20px 20px 0;
`;
