import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const NavigationLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default NavigationLayout;
