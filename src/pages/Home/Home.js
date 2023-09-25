import React from 'react';
import { HomeBox, HomeDescr, HomeImg } from './Home.styled';
import Phonebook from '../../Utills/PhoneBook.png';

const Home = () => {
  return (
    <HomeBox>
      <HomeImg src={Phonebook} alt="img" />
      <HomeDescr>   
        We offer an easy-to-use program for storing the phone numbers of your
        contacts. To start using it, simply register and save the necessary
        numbers, which will always be at hand, because it is convenient both on
        a computer and on a mobile phone. You can see more of my works at
        
      </HomeDescr>
    </HomeBox>
  );
};

export default Home;