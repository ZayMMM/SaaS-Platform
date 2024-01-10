import React from "react";
import { Route, RouteProps } from "react-router-dom";

// components
import PrivateRoute from "./PrivateRoute";
// import Root from './Root';

// lazy load all the views

// auth
const Login = React.lazy(() => import("../pages/auth/Login"));
const Logout = React.lazy(() => import("../pages/auth/Logout"));
const Confirm = React.lazy(() => import("../pages/auth/Confirm"));
const ForgetPassword = React.lazy(() => import("../pages/auth/ForgetPassword"));
const Register = React.lazy(() => import("../pages/auth/Register"));
const SignInSignUp = React.lazy(() => import("../pages/auth/SignInSignUp"));
const LockScreen = React.lazy(() => import("../pages/auth/LockScreen"));

// auth2
const Login2 = React.lazy(() => import("../pages/auth2/Login2"));
const Logout2 = React.lazy(() => import("../pages/auth2/Logout2"));
const Register2 = React.lazy(() => import("../pages/auth2/Register2"));
const Confirm2 = React.lazy(() => import("../pages/auth2/Confirm2"));
const ForgetPassword2 = React.lazy(
  () => import("../pages/auth2/ForgetPassword2")
);
const LockScreen2 = React.lazy(() => import("../pages/auth2/LockScreen2"));
const SignInSignUp2 = React.lazy(() => import("../pages/auth2/SignInSignUp2"));

const Home = React.lazy(() => import("../pages/home/Home"));

export interface RoutesProps {
  path: RouteProps["path"];
  name?: string;
  element?: RouteProps["element"];
  route?: any;
  exact?: boolean;
  icon?: string;
  header?: string;
  roles?: string[];
  children?: RoutesProps[];
}

// root routes
// const rootRoute: RoutesProps = {
//     path: '/',
//     exact: true,
//     element: () => <Root />,
//     route: Route,
// };

// dashboards
const dashboardRoutes: RoutesProps = {
  path: "/dashboard",
  name: "Dashboards",
  icon: "airplay",
  header: "Navigation",
  children: [
    {
      path: "/home",
      name: "Home",
      element: <Home />,
      route: PrivateRoute,
    },
  ],
};

// auth
const authRoutes: RoutesProps[] = [
  {
    path: "",
    name: "Login",
    element: <Login />,
    route: Route,
  },
  {
    path: "/auth/register",
    name: "Register",
    element: <Register />,
    route: Route,
  },
];

// flatten the list of all nested routes
const flattenRoutes = (routes: RoutesProps[]) => {
  let flatRoutes: RoutesProps[] = [];

  routes = routes || [];
  routes.forEach((item: RoutesProps) => {
    flatRoutes.push(item);

    if (typeof item.children !== "undefined") {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    }
  });
  return flatRoutes;
};

// All routes
const authProtectedRoutes = [dashboardRoutes];
const publicRoutes = [...authRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export {
  publicRoutes,
  authProtectedRoutes,
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
};
