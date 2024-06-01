import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    width: 146px;
    padding: 16px 39px;
  `,
  medium: css`
    width: 159px;
    padding: 16px 32px;
  `,
  large: css`
    width: 400px;
    padding: 16px 171px;
  `,
};

const colors = {
  primary: css`
    border: 1px solid rgba(5, 5, 5, 0.2);
    background: rgba(5, 5, 5, 0.2);
    color: rgba(255, 255, 255, 0.4);
    &:hover {
      border: 1px solid #050505;
      background: #050505;
      color: #fff;
    }
  `,
  secondary: css`
    border: 1px solid #050505;
    background: none;
    color: #050505;
    &:hover {
      border: 1px solid #050505;
      background: #050505;
      color: #fff;
    }
  `,
  tertiary: css`
    border: 1px solid rgba(5, 5, 5, 0.85);
    background: rgba(5, 5, 5, 0.85);
    color: #fff;
    &:hover {
      border: 1px solid #050505;
      background: #050505;
    }
  `,
};

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.08px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 900ms cubic-bezier(0.4, 0, 0.2, 1);

  ${props => sizes[props.size]}
  ${props => colors[props.colors]}
`;

Button.defaultProps = {
  size: 'medium',
  colors: 'primary',
};