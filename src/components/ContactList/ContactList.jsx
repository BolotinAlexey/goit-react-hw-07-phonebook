import { Ul } from './ContactList.styled';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

function ContactList() {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <Ul>
      {visibleContacts.map(({ name, id, number }) => (
        <ContactItem id={id} key={id} number={number} name={name} />
      ))}
    </Ul>
  );
}

export default ContactList;
