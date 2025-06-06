// import React, { createContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// // Create the context
// export const AuthContext = createContext();

// // Create a provider component
// export const AuthProvider = ({ children }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const navigate = useNavigate(); // Use navigate to redirect

//     // Check if the user is authenticated
//     useEffect(() => {
//         const checkAuth = async () => {
//             // Example: Check authentication status from localStorage or an API
//             const token = localStorage.getItem('authToken');
//             if (token) {
//                 // Optionally validate token with API
//                 setIsAuthenticated(true);
//             } else {
//                 setIsAuthenticated(false);
//             }
//         };
//         checkAuth();
//     }, []);

//     // Handle login
//     const login = (token) => {
//         localStorage.setItem('authToken', token);
//         setIsAuthenticated(true);
//         navigate('/shiftLogForm'); // Redirect to a protected route after login
//     };

//     // Handle logout
//     const logout = () => {
//         localStorage.removeItem('authToken');
//         setIsAuthenticated(false);
//         navigate('/'); // Redirect to home or login page after logout
//     };

//     return (
//         <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => setIsAuthenticated(true);
    const logout = () => setIsAuthenticated(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
