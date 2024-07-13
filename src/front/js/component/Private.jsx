import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const validateToken = async () => {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                navigate("/login");
                return;
            }

            const response = await fetch('/api/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                setLoading(false);
            } else {
                navigate("/login");
            }
        };

        validateToken();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        navigate("/login");
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5 text-center">
            <h1>Welcome to your Private Page</h1>
            <div className="d-flex flex-column align-items-center gap-1">
                <p>{store.user === undefined ? null : store.user}</p>
                <div className="img-cntr">
                    <img
                        src="https://t3.ftcdn.net/jpg/05/81/36/68/360_F_581366810_bNe4QcjrSKUvPaPGQiBsrMl34nwGviuQ.jpg"
                        alt="Cat At The Beach Images"
                        className="img-fluid border border-white rounded-1"
                    />
                </div>
                <Link to={'/'} className="page-link page-link2">
                    <p className="mt-3 text-white fw-bold">
                        Return to Login Page
                    </p>
                </Link>
                <button className="btn btn-danger mt-2" onClick={handleLogout}>
                    Log Out
                </button>
            </div>
        </div>
    );
};