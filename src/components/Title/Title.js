import PropTypes from 'prop-types';
import { H2 } from './Title.styled';

const Title = ({ title }) => {
  return (
    <>
      <H2>{title}</H2>
    </>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
