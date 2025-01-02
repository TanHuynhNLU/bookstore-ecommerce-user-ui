import { createContext, useState } from 'react';

export const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : '');

    const handleLogin = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const handleLogout = () => {
        setUser('');
        localStorage.removeItem('user');
    };

    return (
        <UserContext.Provider value={{ currUser: user, handleLogin, handleLogout }}>{children}</UserContext.Provider>
    );
}

export default UserProvider;
