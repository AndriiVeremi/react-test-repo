import { FiArrowUpRight } from 'react-icons/fi';
import { UserBarMenuWrapper, UserBarMenuLink } from './UserBarMenu.styled';

const UserBarMenu = () => {
  return (
    <UserBarMenuWrapper>
      <UserBarMenuLink>Profile</UserBarMenuLink>
      <UserBarMenuLink>
        Log out
        <span>
          <FiArrowUpRight />
        </span>
      </UserBarMenuLink>
    </UserBarMenuWrapper>
  );
};

export default UserBarMenu;
