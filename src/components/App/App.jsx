import NavigationLayout from 'layouts/NavigationLayout';
import ShopPages from 'pages/ShopPages/ShopPages';
import CardPages from 'pages/CardPages/CardPages';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<NavigationLayout />}>
          <Route index element={<ShopPages />} />
          <Route path="/card" element={<CardPages />} />
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Container>
  );
};
