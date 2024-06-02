import MainButton from 'components/MainButton/MainButton';
import LoginButton from 'components/LoginButton/LoginButton';
import BtnWrapper from './TestBtn.styled'

export const TestBtn = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('message');
  };

  return (
    <BtnWrapper>
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

      <LoginButton />
    </BtnWrapper>
  );
};
