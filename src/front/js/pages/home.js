import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const Home = () => {
    return (
        <div className="container mt-5">
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of your application.</p>
            <Link to="/login" className="btn btn-primary">Login</Link>
            <Link to="/signup" className="btn btn-secondary ms-3">Signup</Link>
        </div>
    );
};

export default Home;