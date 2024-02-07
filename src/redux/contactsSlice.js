import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(contactName, contactNumber) {
        return {
          payload: {
            contactName,
            contactNumber,
            contactId: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.findIndex(
        contact => contact.contactId === action.payload
      );
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
