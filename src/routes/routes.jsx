import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        }
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/signUp',
      element: <SignUp></SignUp>
    }
  ]);
  export default router