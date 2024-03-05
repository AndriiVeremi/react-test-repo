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

export const App = () => {

  // const [filter, setFilter] = useState('');

  const contacts = useSelector((state) => state.contacts)
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
      contacts.contacts.find(
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

  // const findContacts = e => {
  //   setFilter(e.currentTarget.value.toLowerCase());
  // };

  // const deleteContacts = id => {
  //   setContacts(prevState => prevState.filter(user => user.id !== id));
  //   Notify.success('Contact successfully deleted.');
  // };

  const deleteContacts = id => {
    dispatch(delContacts(id))
    Notify.success('Contact successfully deleted.');
  };

  // const viewContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const visibleContacts = viewContacts();

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
      <ContactFilter />
      {/* <ContactFilter value={filter} findContacts={findContacts} /> */}
      {contacts.contacts.length === 0 ? (
        <Text>Sorry, you don't have any contacts.</Text>
      ) : (
        <ContactList data={contacts.contacts} deleteContacts={deleteContacts}/>
      )}
    </Container>
  );
};
