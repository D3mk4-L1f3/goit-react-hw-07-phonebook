import ContactForm from './module/ContactForm';
import ContactList from './module/ContactList';
import Filter from './module/ContactFilter';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  MainAppStyle,
  MainContainerStyle,
  MainTitleStyle,
  SecondTitleStyle,
} from './styled-component/app.styled';

export function App() {
  return (
    <MainAppStyle>
      <MainContainerStyle>
        <MainTitleStyle>Phonebook</MainTitleStyle>
        <ContactForm />
      </MainContainerStyle>
      <MainContainerStyle>
        <SecondTitleStyle>Contacts</SecondTitleStyle>
        <Filter />
      </MainContainerStyle>
      <ContactList />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="dark"
        hideProgressBar={true}
        transition={Zoom}
        pauseOnHover
      />
    </MainAppStyle>
  );
}
