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
        colors="primary"
        size="small"
        onClick={handleSubmit}
      >
        Sign in
      </MainButton>

      <MainButton
        type="button"
        colors="secondary"
        size="medium"
        onClick={handleSubmit}
      >
        Add recipe
      </MainButton>

      <MainButton
        type="submit"
        colors="tertiary"
        size="large"
        onClick={handleSubmit}
      >
        Publish
      </MainButton>
    </Container>
  );
};
