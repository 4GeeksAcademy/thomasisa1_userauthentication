import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Private = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    useEffect(() => {
        const validateUser = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login');
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
                const data = await response.json();
                setMessage(`Welcome, ${data.logged_in_as}`);
            } else {
                navigate('/login');
            }
        };

        validateUser();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="private-container">
            <h1>Private</h1>
            <p>{message}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};