// import MainButton from 'components/MainButton/MainButton';
import { Modal } from 'components/Modal/Modal';
import { NavMenuWrapper, NavButton } from './NavBar.styled';
import { useState } from 'react';

const NavBar = () => {

  const [showModal, setShowModal] = useState(false);
  
    const toggleModal = () => {
      setShowModal(!showModal);
  };
  
  return (
    <>
      <NavMenuWrapper>
        <NavButton
          type="button"
          colors="clearRev"
          size="tiny"
          onClick={() => toggleModal()}
        >
          Home
        </NavButton>
        <NavButton
          type="button"
          colors="clearRev"
          size="tiny"
          onClick={() => toggleModal()}
        >
          Add recipe
        </NavButton>
      </NavMenuWrapper>

      {showModal && (
        <Modal onClose={() => toggleModal()}>
        </Modal>
      )}
    </>
  );
};

export default NavBar;
