import { createContext, useState, useContext } from 'react';

const CaptainContext = createContext();

export const useCaptain = () => {
    const context = useContext(CaptainContext);
    if (!context) {
        throw new Error('useCaptain must be used within a CaptainProvider');
    }
    return context;
};

export const CaptainProvider = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const loginCaptain = async (credentials) => {
        try {
            setLoading(true);
            // Add your login API call here
            // const response = await api.post('/captain/login', credentials);
            // setCaptain(response.data);
            setIsAuthenticated(true);
            setError(null);
        } catch (err) {
            setError(err.message);
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    };

    const logoutCaptain = () => {
        setCaptain(null);
        setIsAuthenticated(false);
    };

    const value = {
        captain,
        setCaptain,
        isAuthenticated,
        loading,
        error,
        loginCaptain,
        logoutCaptain
    };

    return (
        <CaptainContext.Provider value={value}>
            {children}
        </CaptainContext.Provider>
    );
};

