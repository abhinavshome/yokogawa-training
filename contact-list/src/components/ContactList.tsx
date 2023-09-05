import { useDispatch, useSelector } from "react-redux";
import {
  contactListSelector,
  selectContact,
  selectedContactSelector,
} from "../redux/slices/contactListSlice";

function ContactList() {
  const dispatch = useDispatch();
  const contactList = useSelector(contactListSelector);
  const selectedContact = useSelector(selectedContactSelector);

  return (
    <>
      <h3>Contacts</h3>
      <div className="columns">
        <div>
          <div className="bold">Users</div>
          {contactList.map((user: any) => (
            <div
              key={user.id}
              onClick={() => dispatch(selectContact(user.id))}
              className={
                selectedContact && user.id === selectedContact.id
                  ? "contact-item selected"
                  : "contact-item"
              }
            >
              {user.name}
            </div>
          ))}
        </div>
        {selectedContact && (
          <div>
            <div className="bold">Details</div>
            <div>{selectedContact.name}</div>
            <div>{selectedContact.city}</div>
            <div>{selectedContact.phone}</div>
          </div>
        )}
      </div>
    </>
  );
}

export default ContactList;
