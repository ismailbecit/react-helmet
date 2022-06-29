import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../components/Blog";
import Card from "../components/Card";
import User from "../components/User";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/user" element={<User />} />
                <Route path="/card" element={<Card />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </div>
    );
};

export default Router;
