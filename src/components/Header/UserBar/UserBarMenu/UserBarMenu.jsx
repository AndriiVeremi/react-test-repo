import { UserBarMenuWrapper, UserBarMenuLink } from './UserBarMenu.styled';

const UserBarMenu = () => {
    return (
      <UserBarMenuWrapper>
        <UserBarMenuLink >Profile</UserBarMenuLink>
        <UserBarMenuLink >Log out <span></span></UserBarMenuLink>
      </UserBarMenuWrapper>
    );
}

export default UserBarMenu