import React from "react";
import { Link } from "react-router-dom";
import Router from "./Router/Router";

const App = () => {
    return (
        <div>
            <Router />;
            <div>
                <Link to={"/user"}>User</Link>
            </div>
            <div>
                <Link to={"/card"}>Card</Link>
            </div>
            <div>
                <Link to={"/blog"}>Blog</Link>
            </div>
        </div>
    );
};

export default App;
