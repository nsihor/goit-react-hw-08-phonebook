import { Contact, DeleteBtn } from './contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
    dispatch(fetchContacts());
  };

  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteBtn onClick={() => handleDeleteContact(contact.id)}>
            Delete
          </DeleteBtn>
        </Contact>
      ))}
    </ul>
  );
};
