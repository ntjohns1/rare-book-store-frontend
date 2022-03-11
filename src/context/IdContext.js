import React, { createContext, useContext, useState } from 'react';

// Initialize new context for students
const IdContext = createContext();

// We create a custom hook to provide immediate usage of the student context in other components
export const useIdContext = () => useContext(IdContext);

// idProvider component that holds initial state, returns provider component
export const IdProvider = ({ children }) => {
 
    let bookId = 1;
    let customerId = 1;
    // Provider components expect a value prop to be passed
    return (
        <IdContext.Provider value={{ bookId, customerId }} >
            {/* Render children passed from props */}
            {children}
        </IdContext.Provider >
    );
};
