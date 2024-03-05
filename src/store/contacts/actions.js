import { ADD_CONTACT, DELETE_CONTACT } from './types';

export const addContacts = contact => {
  return { payload: contact, type: ADD_CONTACT };
};

export const deleteContacts = contact => {
  return { payload: contact, type: DELETE_CONTACT };
};
