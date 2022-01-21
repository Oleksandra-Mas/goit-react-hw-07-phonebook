import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { getContacts } from './actions';

const filter = createReducer('', {
    // [actions.changeFilter]: (_, { payload }) => payload,
});

const items = createReducer([], {
    [getContacts.fulfilled]: (_, action) => action.payload,
    // [actions.addContact]: (state, { payload }) => {
    //     const newState = [...state, payload];
    //     return newState;
    // },
    // [actions.deleteContact]: (state, { payload }) => {
    //     const newState = state.filter(({ id }) => id !== payload);
    //     return newState;
    // },
});
export default combineReducers({ items, filter });
