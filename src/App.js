import "./App.css";

import React, {useEffect, useState} from "react";
import axios from "axios";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home/Home";
import MediaDetails from "./components/MediaDetails/MediaDetails";
import Movies from "./components/Movies/Movies";
import Series from "./components/Series/Series";
import Offer from "./components/Offers/Offer";
import Profile from "./components/Profil/Profil";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Error404 from "./components/Error404/Error404";
import {authContext} from "./helpers/authContext";
import jwt_decode from "jwt-decode";
import RequireAuth from "./helpers/requireAuth";
import LoggedIn from "./helpers/loggedIn";

function App() {
    const [user, setUser] = useState(null);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/details/series/:id",
            element: <MediaDetails mediaType = "series"/>,
        },
        {
            path: "/details/movies/:id",
            element: <MediaDetails mediaType = "movies"/>,
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
            element: <LoggedIn />,
            children: [
                {
                    path: "/login",
                    element: <SignIn/>,
                },
                {
                    path: "/signup",
                    element: <SignUp/>,

                },
            ],
        },
        {
            element: <RequireAuth />,
            children: [
                {
                    path: "/yourProfile",
                    element: <Profile/>,
                },
            ],
        },
        {
            path: "*",
            element: <Error404/>,
        },


    ]);
    const refreshToken = async (token) => {
        try {
            const res = await axios.post('http://localhost:5000/refresh',null,{
                withCredentials: true,
            });
            localStorage.removeItem('token');
            localStorage.setItem('token', res.data.token);
            console.log("Token refresh successful");
            return res.data.token;
        } catch (err) {
            localStorage.removeItem('token');
            console.log(err);
            return null;
        }
    };

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(
        async config => {
            let currentDate = new Date();
            console.log("currentDate", currentDate.getTime());
            const token = localStorage.getItem('token');
            if (token) {
                const decoded = jwt_decode(token);
                if (decoded.exp * 1000 < currentDate.getTime()) {
                    config.headers["authorization"] = await refreshToken();
                }
            }
            return config;
        } , error => {
            Promise.reject(error);
        }
    );

    useEffect( () => {
        // Check if a token is present in storage
        const token = localStorage.getItem('token');
        if (token) {
            axiosJWT.get('http://localhost:5000/user/authUser', {
                withCredentials: true,
                headers: {
                    Authorization: token,
                },
            })
                .then(response => {
                    setUser(response.data[0]);
                    console.log(response.data[0]);
                    console.log("new ", user);
                })
                .catch( error => {
                    setUser(null);
                    localStorage.removeItem('token');
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
