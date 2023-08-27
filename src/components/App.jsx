import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RestrictedRoute } from 'routeGuard/restrictedRoute';
import { PrivateRoute } from 'routeGuard/privateRoute';
import { refreshUser } from 'redux/operations';
import { selectIsRefreshing } from 'redux/selectors';

const Layout = lazy(() => import('pages/layout'));
const Home = lazy(() => import('pages/home'));
const SignUp = lazy(() => import('pages/signUp'));
const LogIn = lazy(() => import('pages/logIn'));
const Contacts = lazy(() => import('pages/contacts'));
const Error404 = lazy(() => import('pages/error/error'));

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
