import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import MediaDetails from "./components/MediaDetails/MediaDetails";
import Movies from "./components/Movies/Movies";
import Profil from "./components/Profil/Profil";
import Error404 from "./components/Error404/Error404";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Offer from "./components/Offers/Offer";

import Series from "./components/Series/Series";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/details/:id",
        element: <MediaDetails />,
    },
    {
        path: "/movies",
        element: <Movies />,
    },
    {
        path: "/series",
        element: <Series />,
    },
    {
      path: "/offers",
      element: <Offer />,
  },
    {
        path: "profil/:id",
        element: <Profil />,
    },
    {
        path: "/login",
        element: <SignIn />,
    },
    {
        path: "/signup",
        element: <SignUp />,

    },
    {
        path: "*",
        element: <Error404 />,
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
