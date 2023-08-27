import { Link, NavLink } from 'react-router-dom';
import { StyledHeader, Nav, RegLinks, Btn } from './header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';
import { logout } from 'redux/operations';

export const Header = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <StyledHeader>
      <h1>Phonebook</h1>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
      </Nav>
      {!isLoggedIn ? (
        <RegLinks>
          <Link to="/signUp">Sign Up</Link>
          <Link to="/logIn">Log in</Link>
        </RegLinks>
      ) : (
        <RegLinks>
          <p>{user.name}</p>
          <Btn type="button" onClick={handleLogout}>
            Log out
          </Btn>
        </RegLinks>
      )}
    </StyledHeader>
  );
};
