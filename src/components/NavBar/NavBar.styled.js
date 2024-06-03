import styled from 'styled-components';
import { Button } from 'components/MainButton/MainButton.styled';
import theme from 'styles/theme';
import { px, py, flexCenter } from '../../styles/atomic';

export const NavMenuWrapper = styled.div`
  ${flexCenter()}
`;

export const NavButton = styled(Button)`
  border: none;
  background: none;
  color: ${theme.colors.light};
  width: ${px(25.25)}; // 101px / 4
  height: ${px(11)}; // 44px / 4
  ${py(3.5)}// 14px / 4 (для padding-top і padding-bottom)

  font-size: ${theme.fontSizes.xs}; // 12px
  font-weight: ${theme.fontWeights.bold}; // 700
  line-height: ${px(4.5)}; // 18px / 4
  letter-spacing: -0.02em;
  text-transform: uppercase;

  ${theme.mq.mobileOnly} {
    font-size: ${theme.fontSizes.sm};
    line-height: ${theme.lineHeights
      .tight}; // За прикладом, щільніший line-height
  }

  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.base}; // Розмір шрифту для планшетів
    line-height: ${theme.lineHeights
      .normal}; // За прикладом, нормальний line-height
  }

  ${theme.mq.desktop} {
    font-size: ${theme.fontSizes.lg}; // Розмір шрифту для десктопів
    line-height: ${theme.lineHeights
      .loose}; // За прикладом, розширений line-height
  }
`;
