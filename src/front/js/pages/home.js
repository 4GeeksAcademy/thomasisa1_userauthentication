import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the home page of your application.</p>
            {/* You can use store and actions here as needed */}
        </div>
    );
};

export default Home;