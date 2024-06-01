import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    width: 80px;
    height: 38px;
    padding: 10px 16px;
  `,
  large: css`
    height: 46px;
    width: 104px;
    padding: 14px 28px;
  `,
};

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

  position: relative;
  width: 208px;
  height: 46px;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid #333;
`;

export const SlideButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;

  color: #fff;
  /* font-family: Mulish; */
  font-size: 12px;

  font-weight: 700;
  line-height: 18px; 
  letter-spacing: -0.24px;
  text-transform: uppercase;

  position: absolute;
  transition: transform 0.4s ease;
  transform: ${props =>
    props.position === 'left' ? 'translateX(0)' : 'translateX(104px)'};

  ${props => sizes[props.size]}
  ${props => colors[props.colors]}
`;

SlideButton.defaultProps = {
  colors: 'primary',
  size: 'large',
};
