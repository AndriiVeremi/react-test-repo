import MainButton from 'components/MainButton/MainButton';
import { HeaderMenuWrapper } from './NavBar.styled';

const NavBar = () => {
  return (
    <HeaderMenuWrapper>
      <MainButton type="button" colors="clearRev" size="tiny">
        Home
      </MainButton>
      <MainButton type="button" colors="clearRev" size="tiny">
        Add recipe
      </MainButton>
    </HeaderMenuWrapper>
  );
};

export default NavBar;

