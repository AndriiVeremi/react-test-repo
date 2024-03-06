const initialState = { filter: '' };

export const filterReducer = (state, { payload, type }) => {
  if (type === 'filter') {
    return {
      ...state,
      filter: payload,
    };
  } else {
    return initialState;
  }
};
