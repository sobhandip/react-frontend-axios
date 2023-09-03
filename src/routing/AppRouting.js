import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login/Login";
import About from "../components/About";
import Contact from "../components/Contact";
import Dashboard from "../components/Dashboard/Dashboard";
import Header from "../components/Header/Header";
import Error from "../components/Error";

export const appRouting = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Login /> },
        { path: "/about", element: <><Header/><About /></> },
        { path: "/dashboard", element: <><Header/><Dashboard /></> },
        { path: "/contact", element: <><Header/><Contact /></> }
      ],
      errorElement:<Error/>
    },
  ]);