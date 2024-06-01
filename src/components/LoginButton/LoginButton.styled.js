import styled, { css } from 'styled-components';

const colors = {
  primary: css`
    border: none;
    background: none;
    color: #050505;
  `,
  secondary: css`
    border: 1px solid #050505;
    background: rgba(5, 5, 5, 0.9);
    color: #fff;
  `,
};

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 208px;
  height: 46px;
  background-color: #fff;
  border-radius: 30px;
`;

export const SlideButton = styled.button`
  width: 104px;
  height: 46px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;

  font-size: 16px;

  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.32px;

  position: absolute;
  transition: transform 0.4s ease;
  transform: ${props =>
    props.position === 'left' ? 'translateX(0)' : 'translateX(104px)'};

  ${props => colors[props.colors]}
`;

SlideButton.defaultProps = {
  colors: 'primary',
};