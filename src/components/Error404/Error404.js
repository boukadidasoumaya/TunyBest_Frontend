import React from "react";
import "./Error404.css";
import {NavLink} from "react-router-dom";

const Error404 = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>Sorry, the page you're looking for cannot be accessed.</p>
                <NavLink to="/">Go To Homepage</NavLink>
            </div>
        </div>
    );
}
export default Error404;
