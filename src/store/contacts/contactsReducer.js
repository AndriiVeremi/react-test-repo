import { ADD_CONTACT, DELETE_CONTACT } from './types';

const initialState = { contacts: [] };

export const contactsReducer = (state, { type, payload }) => {

  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: payload,
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: payload,
      };
    default:
      return initialState;
  }
};
