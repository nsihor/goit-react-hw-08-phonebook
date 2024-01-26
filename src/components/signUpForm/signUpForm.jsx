import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { Label, StyledForm, StyledInput } from 'form.styled';
import { Container, MainBtn } from 'main.styled';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/operations';
import { getError } from '../../redux/selectors';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(7).required(),
});

export const SignUpForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  useEffect(() => {
    error && error !== 'No token' && error !== 'Request failed with status code 401' && toast.error('Registration error');
  }, [error])

  const handleSubmit = async values => {
    await dispatch(register(values));
  };

  return (
    <Container>
      <h2>Please Sign Up</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <Label htmlFor="name">
            Name:
            <StyledInput type="text" name="name" required />
          </Label>
          <ErrorMessage name="name" component="div" />

          <Label htmlFor="email">
            Email:
            <StyledInput type="text" name="email" required />
          </Label>
          <ErrorMessage name="email" component="div" />

          <Label htmlFor="password">
            Password:
            <StyledInput type="text" name="password" required />
          </Label>
          <ErrorMessage name="password" component="div" />
          {error && error !== 'No token' && error !== 'Request failed with status code 401' && <span>{error}</span>}
          <MainBtn type="submit">Sign Up</MainBtn>
        </StyledForm>
      </Formik>
      <p>
        If you have an account click <Link to={'/logIn'}>here</Link>
      </p>
    </Container>
  );
};
