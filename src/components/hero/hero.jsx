import { Link } from 'react-router-dom';
import { Section } from './hero.styled';

export const Hero = () => (
  <Section>
    <h2>Hello to the Phonebook ✌️</h2>
    <Link to="/signUp">Sign Up</Link>
  </Section>
);
