import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

import {
  FormAddStyle,
  LabelStyle,
  InputStyle,
  ButtonStyle,
} from '../styled-component/form.styled';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', number: '' });
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  const handleInputChange = evt => {
    const { name, value } = evt.target;
    const updatedFormData = {
      ...formData,
      [name]: name === 'number' ? value.replace(/[^\d]/g, '') : value,
    };
    setFormData(updatedFormData);
  };

  const isDuplicateContact = (name, number) => {
    return contacts.some(
      contact => contact.name === name && contact.number === number
    );
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const formatedName = name.replace(/\b\w/g, l => l.toUpperCase());
    const formatedNumber = number.replace(/^(\d{3})(\d{2})(\d+)$/, '$1-$2-$3');

    if (isDuplicateContact(formatedName, formatedNumber)) {
      toast.error('You have already added the same contact!');
    } else {
      dispatch(
        addContact({
          name: formatedName,
          id: nanoid(),
          number: formatedNumber,
        })
      );
      setFormData({ name: '', number: '' });
      toast.success('Successfully added :)');
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
          title="Add here your`s contact name :)"
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
          autoComplete="tel"
          title="Add here your`s contact number :)"
        />
      </LabelStyle>
      <ButtonStyle type="submit" title="Push and add your`s contact :)">
        Add Contact
      </ButtonStyle>
    </FormAddStyle>
  );
}
