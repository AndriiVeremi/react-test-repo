import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { RiContactsBookFill } from 'react-icons/ri';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import { Container, Title, Span, SubTitle, Text } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { newContacts, delContacts } from 'store/contacts/actions';
import { filtersContacts } from 'store/filter/actions';

export const App = () => {

  const {contacts} = useSelector((state) => state.contacts)
  const {filter} = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = data => {

    const newContact = {
      id: nanoid(),
      ...data,
    };

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase() ===
          newContact.name.toLowerCase()
      )
    ) {
      return Report.failure(
        'Sorry',
        `Such contact "${newContact.name}" already exists in your phonebook.`,
        'Ok'
      );
    } else {
      Notify.success(`You added a new contact: ${newContact.name}`);
    }

    dispatch(newContacts(newContact))
  };

  const findContacts = e => {
    console.log('e', e.target.value)
    dispatch(filtersContacts(e.target.value))
  };

  const deleteContacts = id => {
    dispatch(delContacts(id))
    Notify.success('Contact successfully deleted.');
  };

  const viewContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = viewContacts();

  return (
    <Container>
      <RiContactsBookFill
        style={{ width: '100px', height: '100px', color: '#3373e2' }}
      />
      <Title>
        Phone<Span>book</Span>
      </Title>
      <ContactForm setContacts={addContacts} />
      <SubTitle>Contacts List</SubTitle>

      <ContactFilter value={filter} findContacts={findContacts} />
      {contacts.length === 0 ? (
        <Text>Sorry, you don't have any contacts.</Text>
      ) : (
        <ContactList data={visibleContacts} deleteContacts={deleteContacts}/>
      )}
    </Container>
  );
};
