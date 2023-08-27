import { Section } from 'components/Section/section';
import { ContactsList } from 'components/contacts/contacts';
import { Filter } from 'components/filter/filter';
import { Phonebook } from 'components/phonebook/phonebook';

export const Contacts = () => {
  return (
    <>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
};
