import React from "react";
import { Route, RouteProps } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

const Login = React.lazy(() => import("../pages/auth/Login"));

const Home = React.lazy(() => import("../pages/home/Home"));
const IndividualData = React.lazy(
  () => import("../pages/individual/IndividualData")
);
const Support = React.lazy(() => import("../pages/support/Support"));

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

// dashboards
const privateRoutes: RoutesProps = {
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
    {
      path: "/individual",
      name: "Individual",
      element: <IndividualData />,
      route: PrivateRoute,
    },
    {
      path: "/support",
      name: "Support",
      element: <Support />,
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
];

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
const authProtectedRoutes = [privateRoutes];
const publicRoutes = [...authRoutes];

const authProtectedFlattenRoutes = flattenRoutes([...authProtectedRoutes]);
const publicProtectedFlattenRoutes = flattenRoutes([...publicRoutes]);
export {
  publicRoutes,
  authProtectedRoutes,
  authProtectedFlattenRoutes,
  publicProtectedFlattenRoutes,
};
