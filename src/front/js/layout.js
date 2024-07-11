import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signup } from "./component/Signup";
import { Login } from "./component/Login";
import { Private } from "./component/Private";
import Home from "./pages/home";  // Update to match the new path

const Layout = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/private" element={<Private />} />
            </Routes>
        </Router>
    );
};

export default Layout;