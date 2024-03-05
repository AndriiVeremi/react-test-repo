import { ADD_CONTACT, DELETE_CONTACT } from './types';

const initialState = { contacts: [] };

export const contactsReducer = (state, { payload, type }) => {

  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [payload, ...state.contacts]
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts.filter(user => user.id !== payload)]
      };
    default:
      return initialState;
  }
};


