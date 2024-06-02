import NavBar from './NavBar/NavBar';
import AuthBar from './AuthBar/AuthBar';
import UserBar from './UserBar/UserBar';
import {
  TopContainer,
  ContainerBackground,
  HeaderWrapper,
  HeaderLogo,
} from './Header.styled';

const Header = () => {

  const isLogIn = true;

  return (
    <TopContainer>
      <ContainerBackground>
        <HeaderWrapper>
          <HeaderLogo href="#">Foodies</HeaderLogo>
          {isLogIn && <NavBar />}
          {isLogIn ? <UserBar /> : <AuthBar />}
        </HeaderWrapper>
      </ContainerBackground>
    </TopContainer>
  );
};

export default Header;
