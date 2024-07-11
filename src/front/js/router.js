import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout";
import { Signup } from "./component/Signup";
import { Login } from "./component/Login";
import { Private } from "./component/Private";
import Home from "./pages/home";

const RouterComponent = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="private" element={<Private />} />
            </Route>
        </Routes>
    </Router>
);

export default RouterComponent;