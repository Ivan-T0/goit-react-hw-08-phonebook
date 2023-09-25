import { Container } from '../App.styled';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import ErrorCard from '../ErrorCard/ErrorCard';
import Filter from '../Filter/Filter';
import Loader from '../Loader/Loader';
import Title from '../Title/Title';
import { useSelector } from 'react-redux';
import { selectError, selectOperetion } from '../../redux/selector/selectors';

const Contacts = () => {
  const operetion = useSelector(selectOperetion);
  const error = useSelector(selectError);
  return (
    <div>
      <Container>
        <ContactForm />
        {error && <ErrorCard />}
        <div>
          <Title title="Contacts"></Title>
          <Filter />
          {operetion === 'fatch' && <Loader />}
          <ContactList />
        </div>
      </Container>
    </div>
  );
};

export default Contacts;
