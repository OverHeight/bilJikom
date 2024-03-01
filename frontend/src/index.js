import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"

import Login from "./pages/Auth/index";
import Home from "./pages/view/Home";
import Album from "./pages/view/Album";
import Register from "./pages/view/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/index",
    element: <Login/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/album",
    element: <Album/>
  },
  {
    path: "/register",
    element: <Register/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);