import styled from 'styled-components';
import { Button } from 'components/MainButton/MainButton.styled';

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 208px;
  height: 46px;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #333;
`;

export const SlideButton = styled(Button)`
  position: absolute;
  transition: transform 0.4s ease;
  transform: ${props =>
    props.position === 'left' ? 'translateX(0)' : 'translateX(104px)'};

`;

