import styled from 'styled-components';
import background from '../../img/bg/background.jpg';
const BackgroundContainer = ({ children }) => {
  return <BackgroundWrapper>{children} </BackgroundWrapper>;
};
export default BackgroundContainer;
const BackgroundWrapper = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-image: url(${background});
  background-size: 100% 100%;
  overflow: hidden;
  padding: 80px;
  margin-left: auto;
  margin-right: auto;

  /* text-align: center; */

  /*
  Цвет текста
  rgba(121,99,78,1)
  Хедер
  rgba(242,237,233,1)
  Левая страница
  rgba(242,242,242,1)
  Коричневый темный
  rgba(179,154,132,1)
  Коричневый светлый
  rgba(192,166,143,1) */
`;
