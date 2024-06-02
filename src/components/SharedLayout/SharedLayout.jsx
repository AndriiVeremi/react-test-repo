import { TestBtn } from 'components/TestBtn/TestBtn';
import LoginButton from 'components/LoginButton/LoginButton';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <TestBtn/>
      <LoginButton />
      <Outlet />
    </>
  );
};

export default SharedLayout;
