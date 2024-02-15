import React, { createContext, useContext, useState, useEffect } from 'react';
import instanceApi from './axiosConfig';
// import axios from 'axios';

const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await instanceApi.get('/products/');
                setProducts(response.data);
            } catch (error) {
                console.error("Ошибка при получении данных о продуктах:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};
