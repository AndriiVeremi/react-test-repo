import MainButton from 'components/MainButton/MainButton';
import { Container } from './App.styled';


export const App = () => {

 const handleSubmit = e => {
    e.preventDefault();
  console.log('message')
  };

  return (
    <Container>
      <MainButton
        type="submit"
        color="primary"
        size="small"
        onClick={handleSubmit}
      >
        Search
      </MainButton>
      <MainButton
        type="button"
        color="secondary"
        size="medium"
        onClick={handleSubmit}
      >
        Search
      </MainButton>
      <MainButton
        type="submit"
        color="tertiary"
        size="large"
        onClick={handleSubmit}
      >
        Search
      </MainButton>
    </Container>
  );
};
