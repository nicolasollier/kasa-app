//dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//layouts and views
import Layout from "../src/layout/Layout.jsx";
import Home from "../src/views/Home/Home.jsx";
import Accomodations from "./views/Accomodations/Accomodations.jsx";
import About from "../src/views/About/About.jsx";
import NotFound from "../src/views/NotFound/NotFound.jsx";
import ErrorPage from "../src/views/Error/Error.jsx";

//styles
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home />, index: true, errorElement: <ErrorPage />, },
      { path: "accomodations/:id", element: <Accomodations /> },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
