import MainButton from 'components/MainButton/MainButton';
import LoginButton from 'components/LoginButton/LoginButton';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <MainButton type="submit" colors="white" size="tiny">
        Sign in
      </MainButton>

      <MainButton type="button" colors="gray" size="huge">
        Add recipe
      </MainButton>

      <MainButton type="submit" colors="clear" size="medium">
        Publish
      </MainButton>

      <MainButton type="submit" colors="black" size="large">
        Publish
      </MainButton>

      <LoginButton />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
