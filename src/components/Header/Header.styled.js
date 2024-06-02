import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TopContainer = styled.div`
  width: 100%;
  padding: 8px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 1140px;
    padding: 20px;
  }
`;

export const ContainerBackground = styled.div`
  border-radius: 30px;
  background-color: #050505;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
`;

export const HeaderLogo = styled(Link)`
  color: #fff;
  /* font-family: Mulish; */
  font-size: 20px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: -0.4px;
  text-transform: lowercase;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 800;
    line-height: 28px;
    letter-spacing: -0.48px;
  }
`;
