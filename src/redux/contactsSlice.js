import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
// import { initialData } from '../data.js';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const i = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(i, 1);
    },
    [deleteContact.rejected]: handleRejected,
    // addContact: {
    //   reducer(state, action) {
    //     state.push(action.payload);
    //   },
    // },

    // deleteContact(state, action) {
    //   const i = state.findIndex(contact => contact.id === action.payload);
    //   state.splice(i, 1);
    // },
  },
});

export const contactsReducer = contactsSlice.reducer;
// export const { deleteContact, addContact } = contactsSlice.actions;
