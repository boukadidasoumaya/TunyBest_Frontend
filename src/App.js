import "./App.css";

import {Provider, useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {login, store} from "./store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home/Home";
import MediaDetails from "./components/MediaDetails/MediaDetails";
import Movies from "./components/Movies/Movies";
import Series from "./components/Series/Series";
import Offer from "./components/Offers/Offer";
import Profil from "./components/Profil/Profil";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Error404 from "./components/Error404/Error404";
import { authContext } from "./helpers/authContext";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/details/:id",
        element: <MediaDetails/>,
    },
    {
        path: "/movies",
        element: <Movies/>,
    },
    {
        path: "/series",
        element: <Series/>,
    },
    {
        path: "/offers",
        element: <Offer/>,
    },
    {
        path: "profil/:id",
        element: <Profil/>,
    },
    {
        path: "/login",
        element: <SignIn/>,
    },
    {
        path: "/signup",
        element: <SignUp/>,

    },
    {
        path: "*",
        element: <Error404/>,
    }
]);

function App() {
    const [user, setUser] = useState(null);
    // const user = useSelector(state => state.user.value);
    useEffect(() => {
        // Check if a token is present in storage
        const token = localStorage.getItem('token');

        if (token) {
            axios.get('http://localhost:5000/user/authUser', {
                headers: {
                    Authorization: token,
                },
            })
                .then(response => {
                    setUser(response.data[0]);
                    console.log(response.data[0]);
                    console.log("new ", user);
                })
                .catch(error => {
                    setUser(null);
                    console.log('Error fetching user: ', error);
                });
        }
    }, []);

    return (
        <div className="App">
            <authContext.Provider value={{ user, setUser}} >
                <RouterProvider router={router}/>
            </authContext.Provider>
        </div>
    );
}

export default App;
