import { createSlice } from '@reduxjs/toolkit'


const contactListSlice = createSlice({
    name: 'contacts',
    initialState: {
        list: [
            { id: 1, name: 'Virat Kohli', city: 'Bangalore', phone: '+91 121212' },
            { id: 2, name: 'KL Rahul', city: 'Delhi', phone: '+91 3434324324' },
            { id: 3, name: 'Rohit Sharma', city: 'Mumbai', phone: '+91 98797987987' },
            { id: 4, name: 'Shikhar Dhawan', city: 'Chennai', phone: '+91 876876786' },
        ],
        selectedContactId: 0
    },
    reducers: {
        selectContact: (state, action) => {
            state.selectedContactId = action.payload
        }
    }
});

export const { selectContact } = contactListSlice.actions;

export const contactListSelector = (state) => state.contacts.list;
export const selectedContactSelector = (state) => state.contacts.list.find(user => user.id == state.contacts.selectedContactId)



export const contactListReducer = contactListSlice.reducer;

