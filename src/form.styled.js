import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  outline: solid black;
  max-width: 300px;
  min-height: 100px;
  padding: 16px;
`;

export const StyledInput = styled(Field)`
  width: 200px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 25px;
  margin-bottom: 8px;
`;
