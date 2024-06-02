import { useState } from 'react';
import UserBarMenu from './UserBarMenu/UserBarMenu';
// import { useDispatch, useSelector } from 'react-redux';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import {
  UserBarWrapper,
  UserAvatar,
  UserName,
  WrappersIcons,
  MenuWrapper,
  Wrapper,
} from './UserBar.styled';

const UserBar = () => {
  //   const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);

  //   useEffect(() => {
  //     dispatch();
  //   }, [dispatch]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <UserBarWrapper>
        <Wrapper>
          <UserAvatar
            src="https://ftp.goit.study/img/so-yummy/ingredients/640c2dd963a319ea671e37aa.png"
            alt="avatar"
            width="50px"
          />

          <WrappersIcons onClick={toggleMenu}>
            <UserName>Victoria</UserName>
            {showMenu ? (
              <BiChevronDown
                style={{ width: '20px', height: '20px', color: '#fff' }}
              />
            ) : (
              <BiChevronUp
                style={{ width: '20px', height: '20px', color: '#fff' }}
              />
            )}
          </WrappersIcons>
        </Wrapper>

        {showMenu && (
          <MenuWrapper>
            <UserBarMenu />
          </MenuWrapper>
        )}
      </UserBarWrapper>
    </>
  );
};

export default UserBar;
