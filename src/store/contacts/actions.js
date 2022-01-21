import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
import { ActionType } from './action-types';

import { fetchContacts, deleteContact } from '../../services/apiService';

// const addContact = createAction(ActionType.ADD_CONTACT, contact => ({
//     payload: {
//         id: shortid.generate(),
//         ...contact,
//     },
// }));

// const deleteContact = createAction(ActionType.DELETE_CONTACT);

export const changeFilter = createAction(ActionType.CHANGE_FILTER);

export const getContacts = createAsyncThunk(
    ActionType.GET_CONTACTS,
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await fetchContacts();
            return contacts;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

export const removeContact = createAsyncThunk(
    ActionType.DELETE_CONTACT,
    async (id, { rejectWithValue }) => {
        try {
            const contacts = await deleteContact(id);
            return contacts;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
);
