import { SELECT_CONTACT } from "../actions/contactListActions";
import { produce } from "immer"

const INITIAL_STATE = {
    users: [
        { id: 1, name: 'Virat Kohli', city: 'Bangalore', phone: '+91 121212' },
        { id: 2, name: 'KL Rahul', city: 'Delhi', phone: '+91 3434324324' },
        { id: 3, name: 'Rohit Sharma', city: 'Mumbai', phone: '+91 98797987987' },
        { id: 4, name: 'Shikhar Dhawan', city: 'Chennai', phone: '+91 876876786' },
    ],
    selectedUserId: null
};

function contactListReducer(state = INITIAL_STATE, action) {
    return produce(state, function (draft) {
        switch (action.type) {
            case SELECT_CONTACT: {
                draft.selectedUserId = action.data;
                break;
            }
            default:
                break;
        }
    });
}

export function contactListSelector(state) {
    return state.contacts.users;
}

export function selectedUserSelector(state) {
    return state.contacts.users.find(user => user.id === state.contacts.selectedUserId);
}

export default contactListReducer


