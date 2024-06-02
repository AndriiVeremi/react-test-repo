import { useState } from 'react';
import NavBar from './NavBar/NavBar';
import AuthBar from './AuthBar/AuthBar';
import {
  TopContainer,
  ContainerBackground,
  HeaderWrapper,
  HeaderLogo,
} from './Header.styled';

const Header = () => {
  const [isLogIn, setIsLogIn] = useState(true);

  return (
    <TopContainer>
      <ContainerBackground>
        <HeaderWrapper>
          <HeaderLogo href="#">Foodies</HeaderLogo>
          {isLogIn && <NavBar />}
          {isLogIn ? <AuthBar /> : <AuthBar />}
        </HeaderWrapper>
      </ContainerBackground>
    </TopContainer>
  );
};

export default Header;
