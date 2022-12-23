import styled from 'styled-components';
import ButtonS from '../ButtonS';

const WrapperS = styled.main`
 display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  & > ${ButtonS}{
  background-color: blue;
}
`;

export default WrapperS;
