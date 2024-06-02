import React, { useState } from 'react';
import { SlideButton, BtnWrapper } from './LoginButton.styled';

const LoginButton = () => {

   const [isSignUpFirst, setIsSignUpFirst] = useState(true);

   const toggleButtons = () => {
     setIsSignUpFirst(!isSignUpFirst);
   };
    
  return (
    <BtnWrapper>
      <SlideButton
        position={isSignUpFirst ? 'left' : 'right'}
        onClick={toggleButtons}
        colors={isSignUpFirst ? 'clear' : 'black'}
        size="tiny"
      >
        Sign up
      </SlideButton>
      <SlideButton
        position={isSignUpFirst ? 'right' : 'left'}
        onClick={toggleButtons}
        colors={isSignUpFirst ? 'black' : 'clear'}
        size="tiny"
      >
        Sign in
      </SlideButton>
    </BtnWrapper>
  );
};

export default LoginButton;
