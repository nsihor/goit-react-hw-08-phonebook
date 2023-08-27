import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { Label, StyledForm, StyledInput } from 'form.styled';
import { Container, MainBtn } from 'main.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/operations';
import { Link } from 'react-router-dom';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
});

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    dispatch(register(values));
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

          <MainBtn type="submit">Sign Up</MainBtn>
        </StyledForm>
      </Formik>
      <p>
        If you have an account click <Link to={'/logIn'}>here</Link>
      </p>
    </Container>
  );
};
