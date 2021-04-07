import React, { Component } from 'react';

import Section from './components/Section';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import ContactForm from './components/ContactForm';

class App extends Component {
  render() {
    return (
      <>
        <Section>
          <h1>PhoneBook</h1>
          <ContactForm />
        </Section>
        <Section>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </Section>
      </>
    );
  }
}

export default App;
