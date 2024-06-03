import NavBar from '../NavBar/NavBar';
import AuthBar from '../AuthBar/AuthBar';
import UserBar from '../UserBar/UserBar';
import Logo from 'components/Logo/Logo';

import {
  TopContainer,
  ContainerBackground,
  HeaderWrapper,
} from './Header.styled';

const Header = () => {
  const isLogIn = true;

  return (
    <TopContainer>
      <ContainerBackground>
        <HeaderWrapper>
          <Logo />
          {isLogIn && <NavBar />}
          {isLogIn ? <UserBar /> : <AuthBar />}
        </HeaderWrapper>
      </ContainerBackground>
    </TopContainer>
  );
};

export default Header;
