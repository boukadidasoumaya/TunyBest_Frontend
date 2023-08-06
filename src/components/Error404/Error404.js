import React from "react";
import "./Error404.css";
const Error404 = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>Sorry, the page you're looking for cannot be accessed.</p>
                <a href="#">Go To Homepage</a>
            </div>
        </div>
    );
}
export default Error404;
