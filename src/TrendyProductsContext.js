import React, { createContext, useContext, useState, useEffect } from 'react';
import instanceApi from './axiosConfig';
// import axios from 'axios';

const TrendyProdContext = createContext();

export const useTrending = () => useContext(TrendyProdContext);

export const TrendyProdProvider = ({ children }) => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await instanceApi.get('/trending/');
                setTrending(response.data);
            } catch (error) {
                console.error("Ошибка при получении данных о продуктах:", error);
            }
        };

        fetchTrending();
    }, []);

    return (
        <TrendyProdContext.Provider value={{ trending }}>
            {children}
        </TrendyProdContext.Provider>
    );
};
