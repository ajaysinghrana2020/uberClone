import React,{ useContext,useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
    const token = localStorage.getItem('token');
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const navigate = useNavigate();
    const [ isLoading, setIsLoading ] = useState(true);
    
    useEffect(() => {
        const fetchProfile = async () => {
        if (!token) {
            navigate('/captain-login');
            return;
        }

        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCaptain(response.data.captain)

        } catch (error) {
            console.error("Error fetching captain profile:", error);
            navigate('/captain-login');
        } finally {
            setIsLoading(false);
        }
    };

    fetchProfile();
}, [token]);

    return (
        <>
            { children }
        </>
    );
}
export default CaptainProtectedWrapper;