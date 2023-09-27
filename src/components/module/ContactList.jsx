import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/mockapi/operations';
import { getContacts, getFilteredName } from 'redux/contactsSlice';

import {
  ListStyle,
  ItemStyle,
  DateCreated,
  ContactText,
  EmptyStyle,
} from '../styled-component/list.styled';
import { ButtonStyle } from '../styled-component/form.styled';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filteredText = useSelector(getFilteredName);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formatCreatedAt = isoDate => {
    if (!isoDate) {
      return 'O_ops!';
    }

    const date = new Date(isoDate);
    const formattedDate = !isNaN(date.getTime())
      ? `${String(date.getDate()).padStart(2, '0')}
        .${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`
      : 'O_ops!';

    return formattedDate;
  };

  const formatName = name => name.replace(/\b\w/g, l => l.toUpperCase());
  const formatNumber = number =>
    number.replace(/^(\d{3})(\d{2})(\d+)$/, '$1-$2-$3');

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredArray = contacts.filter(contact => {
    const contactInfo = `${contact.name} ${contact.phone}`
      .toLowerCase()
      .replace(/-/g, '');
    const filterTextLower = filteredText.toLowerCase().replace(/-/g, '');

    return contactInfo.includes(filterTextLower);
  });

  return (
    <>
      <ListStyle>
        {filteredArray.length === 0 ? (
          <EmptyStyle>It's empty :(</EmptyStyle>
        ) : (
          filteredArray.map(contact => (
            <ItemStyle key={contact.id}>
              <ContactText>
                {formatName(contact.name)} : {formatNumber(contact.phone)}
              </ContactText>
              <DateCreated title="When was added +\- 1 day :)">
                Created: {formatCreatedAt(contact.createdAt)}
              </DateCreated>
              <ButtonStyle
                onClick={() => handleDelete(contact.id)}
                title="Remove your's contact :("
              >
                Delete
              </ButtonStyle>
            </ItemStyle>
          ))
        )}
      </ListStyle>
    </>
  );
}
