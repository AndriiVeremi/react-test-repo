import MainButton from 'components/MainButton/MainButton';
import {BtnWrapper} from './TestBtn.styled';

export const TestBtn = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('message');
  };

  return (
    <BtnWrapper>
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
    </BtnWrapper>
  );
};
