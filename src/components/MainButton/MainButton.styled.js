import styled, { css } from 'styled-components';

const sizes = {
  tiny: css`
    width: 101px;
    height: 44px;
    /* padding: 14px 28px; */
  `,
  small: css`
    width: 104px;
    height: 46px;
    /* padding: 14px 28px; */
  `,
  medium: css`
    width: 146px;
    height: 56px;
    /* padding: 16px 39px; */
  `,
  large: css`
    width: 159px;
    height: 56px;
    /* padding: 16px 32px; */
  `,
  huge: css`
    width: 400px;
    height: 56px;
    /* padding: 16px 171px; */
  `,
};

const colors = {
  white: css`
    border: none;
    background: none;
    color: #050505;
  `,
  clear: css`
    border: 1px solid #050505;
    background: none;
    color: #050505;
    &:hover {
      border: 1px solid #050505;
      background: #050505;
      color: #fff;
    }
  `,
  grej: css`
    border: 1px solid rgba(5, 5, 5, 0.2);
    background: rgba(5, 5, 5, 0.2);
    color: rgba(255, 255, 255, 0.4);
    &:hover {
      border: 1px solid #050505;
      background: #050505;
      color: #fff;
    }
  `,
  black: css`
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

  /* font-family: Mulish; */
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.32px;
  text-transform: uppercase;

  cursor: pointer;
  transition: all 900ms cubic-bezier(0.4, 0, 0.2, 1);

  ${props => sizes[props.size]}
  ${props => colors[props.colors]}
`;

Button.defaultProps = {
  size: 'tiny',
  color: 'white',
};
