import { ADD_CONTACT, DELETE_CONTACT } from './types';

export const newContacts = contact => {
  return { payload: contact, type: ADD_CONTACT };
};

export const delContacts = contact => {
  return { payload: contact, type: DELETE_CONTACT };
};
