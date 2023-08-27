import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'pages/layout';
import { Home } from 'pages/home';
import { SignUp } from 'pages/signUp';
import { LogIn } from 'pages/logIn';
import { Contacts } from 'pages/contacts';
import Error404 from 'pages/error/error';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/operations';
import { selectIsRefreshing } from 'redux/selectors';
import { RestrictedRoute } from 'routeGuard/restrictedRoute';
import { PrivateRoute } from 'routeGuard/privateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="signUp"
              element={<RestrictedRoute component={SignUp} />}
            />
            <Route
              path="/logIn"
              element={<RestrictedRoute component={LogIn} />}
            />
            <Route
              path="contacts"
              element={<PrivateRoute component={Contacts} />}
            />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </Suspense>
    )
  );
};
