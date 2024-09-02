import React, { createContext, useContext, useState } from 'react';

// Create a Context for Favorites
const FavoritesContext = createContext();

// Create a provider component
export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    // Function to add a book to favorites
    const addFavorite = (book) => {
        setFavorites((prevFavorites) => [...prevFavorites, book]);
    };

    // Function to remove a book from favorites
    const removeFavorite = (bookId) => {
        setFavorites((prevFavorites) => prevFavorites.filter(book => book.id !== bookId));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

// Custom hook to use the Favorites context
export const useFavorites = () => useContext(FavoritesContext);
