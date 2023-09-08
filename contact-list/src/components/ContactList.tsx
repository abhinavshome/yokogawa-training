import { useDispatch, useSelector } from "react-redux";
import {
  contactListSelector,
  selectedUserSelector,
} from "../redux/reducers/contactListReducer";
import { selectContact } from "../redux/actions/contactListActions";

function ContactList() {
  const users = useSelector(contactListSelector);
  const selectedUser = useSelector(selectedUserSelector);

  const dispatch = useDispatch();

  return (
    <>
      <h3>Contacts</h3>
      <div className="columns">
        <div>
          <div className="bold">Users</div>
          {users.map((user: any) => (
            <div
              key={user.id}
              onClick={() => dispatch(selectContact(user.id))}
              className={selectedUser?.id === user.id ? "selected" : ""}
            >
              {user.name}
            </div>
          ))}
        </div>

        <div>
          <div className="bold">Details</div>
          {selectedUser ? (
            <div>
              <div>{selectedUser.name}</div>
              <div>{selectedUser.city}</div>
              <div>{selectedUser.phone}</div>
            </div>
          ) : (
            <div>No user selected</div>
          )}
        </div>
      </div>
    </>
  );
}

export default ContactList;
