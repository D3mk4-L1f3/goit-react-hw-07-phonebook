import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/mockapi/operations';
import { getContacts } from '../../redux/contactsSlice';
import { toast } from 'react-toastify';

import {
  FormAddStyle,
  LabelStyle,
  InputStyle,
  ButtonStyle,
} from '../styled-component/form.styled';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [formData, setFormData] = useState({ name: '', number: '' });

  const isDuplicateContact = (name, phone) => {
    return contacts.some(
      contact => contact.name === name && contact.phone === phone
    );
  };

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    const updatedFormData = {
      ...formData,
      [name]: name === 'number' ? value.replace(/[^\d]/g, '') : value,
    };
    setFormData(updatedFormData);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (isDuplicateContact(name, number)) {
      toast.error('You have already added the same contact!');
    } else {
      dispatch(
        addContact({
          name: name,
          phone: number,
        })
      );
      setFormData({ name: '', number: '' });
    }
    form.reset();
  };

  return (
    <FormAddStyle onSubmit={handleSubmit}>
      <LabelStyle>
        Name:
        <InputStyle
          type="text"
          name="name"
          required
          placeholder="... or full name"
          value={formData.name}
          onChange={handleInputChange}
          autoComplete="name"
          title="Add here your's contact NAME :)"
        />
      </LabelStyle>
      <LabelStyle>
        Number:
        <InputStyle
          type="tel"
          name="number"
          required
          placeholder="... only numbers"
          value={formData.number}
          onChange={handleInputChange}
          autoComplete="number"
          title="Add here your's contact NUMBER :)"
        />
      </LabelStyle>
      <ButtonStyle type="submit" title="Push and add your's contact :)">
        Add Contact
      </ButtonStyle>
    </FormAddStyle>
  );
}
