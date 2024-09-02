import React, { createContext, useContext, useState } from 'react';

// Create a Context for Borrowed Items
const BorrowedContext = createContext();

// Create a provider component
export const BorrowedProvider = ({ children }) => {
    const [borrowedItems, setBorrowedItems] = useState([]);

    // Function to add a book to borrowed list
    const addBorrowedItem = (book) => {
        setBorrowedItems((prevItems) => [...prevItems, book]);
    };

    // Function to remove a book from borrowed list
    const removeBorrowedItem = (bookId) => {
        setBorrowedItems((prevItems) => prevItems.filter(item => item.id !== bookId));
    };

    return (
        <BorrowedContext.Provider value={{ borrowedItems, addBorrowedItem, removeBorrowedItem }}>
            {children}
        </BorrowedContext.Provider>
    );
};

// Custom hook to use the Borrowed context
export const useBorrowed = () => useContext(BorrowedContext);
