import { NavLink } from 'react-router-dom';

import { HeaderWrapper, HeaderNav } from './Header.styled';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderNav>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/card">Shopping Cart</NavLink>
      </HeaderNav>
    </HeaderWrapper>
  );
};

export default Header;
