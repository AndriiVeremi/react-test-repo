import MainButton from 'components/MainButton/MainButton';
import { Modal } from 'components/Modal/Modal';
import { HeaderMenuWrapper } from './NavBar.styled';
import { useState } from 'react';

const NavBar = () => {

  const [showModal, setShowModal] = useState(false);
  
    const toggleModal = () => {
      setShowModal(!showModal);
  };
  
  return (
    <>
      <HeaderMenuWrapper>
        <MainButton
          type="button"
          colors="clearRev"
          size="tiny"
          onClick={() => toggleModal()}
        >
          Home
        </MainButton>
        <MainButton
          type="button"
          colors="clearRev"
          size="tiny"
          onClick={() => toggleModal()}
        >
          Add recipe
        </MainButton>
      </HeaderMenuWrapper>

      {showModal && (
        <Modal onClose={() => toggleModal()}>
        </Modal>
      )}
    </>
  );
};

export default NavBar;
