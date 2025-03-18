import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        // Navigate to the dashboard or login page
        navigate('/');
    }, [navigate]);

    return null; // Return null or some loading spinner while redirecting
}