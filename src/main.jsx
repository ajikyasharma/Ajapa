import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home.jsx";
import Account from "./Components/Account.jsx";
import Billing from "./Components/Billing.jsx";
import Login from "./Components/Login.jsx";
import SignUp from "./Components/SignUp.jsx";
import Loading from "./Components/Loading.jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/account" element={<Account />} />
//       <Route path="/billing" element={<Billing />} />
//     </Route>
//   )
// );

const router= createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children :[
      {
        path:'/',
        element:<Home />
      } ,
      {
        path:'/account',
        element : <Account />
      },
      {
        path:'/billing',
        element :<Billing />
      } 
    ]
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/signup',
    element:<SignUp />
  }

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
