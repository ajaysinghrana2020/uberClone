import React, { createContext, useState, useContext, useMemo } from 'react';

export const UserDataContext = createContext(null);

const initialUserState = {
    fullname: {
        firstname: '',
        lastname: ''
    },
    email: '',
    password: ''
};

const UserContext = ({ children }) => {
    const [user, setUser] = useState(initialUserState);

    const value = useMemo(() => ({ user, setUser }), [user]);

    return (
        <UserDataContext.Provider value={value}>
            {children}
        </UserDataContext.Provider>
    );
};

// export const useUser = () => useContext(UserDataContext);

// export default UserContext;
export { UserContext };
export const useUser = () => useContext(UserDataContext);

// export default UserContext;