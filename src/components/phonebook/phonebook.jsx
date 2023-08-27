import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { MainBtn } from 'main.styled';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import { Label, StyledForm, StyledInput } from 'form.styled';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я\s'-]+$/, 'Invalid name')
    .required(),
  number: yup
    .string()
    .matches(/^\+?[()\d\s-]+$/, 'Invalid phone number')
    .required(),
});

export const Phonebook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      return alert(`${values.name} is already in contact`);
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <Label htmlFor="name">
            Name:
            <StyledInput type="text" name="name" required />
          </Label>
          <ErrorMessage name="name" component="div" />

          <Label htmlFor="number">
            Number:
            <StyledInput type="tel" name="number" required />
          </Label>
          <ErrorMessage name="number" component="div" />

          <MainBtn type="submit">Add contact</MainBtn>
        </StyledForm>
      </Formik>
    </>
  );
};
