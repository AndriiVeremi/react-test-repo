import styled from 'styled-components';
import { flexCenter } from '../../styles/atomic';
import theme from '../../styles/theme';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  ${flexCenter()}
  z-index: 1200;
  background: rgba(18, 20, 23, 0.5);
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  border-radius: ${theme.radii.md};
  padding: ${theme.spacings[8]} ${theme.spacings[4]};
  ${theme.mq.tablet} {
    padding: ${theme.spacings[8]} ${theme.spacings[4]};
  }
`;
