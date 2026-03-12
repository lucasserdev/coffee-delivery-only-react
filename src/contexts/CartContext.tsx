'use client'
import { CartReducer } from "@/reducers/CartReducer";
import { CartType } from "@/types/CartType";
import { CoffeType } from "@/types/CoffeType";
import React, { createContext, useContext, useEffect, useReducer } from "react";

const STORAGE_KEY = 'ainai';

type ContextType = {
    cart: CartType[];
    addCoffee: (coffee: CoffeType) => void;
    removeCoffee: (id: number) => void;
    removeAll: () => void;
    increment: (id: number) => void;
    decrement: (id: number) => void;
}

export const CartContext = createContext<ContextType | null>(null);

export const CartProvider = ({children}: {children: React.ReactNode}) => {
    const [cart, dispatch] = useReducer(CartReducer, [], () => {
        if (typeof window === 'undefined') return [];
        return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }, [cart])

    const addCoffee = (coffee: CoffeType) => {
        const existing = cart.find(item => item.coffee.id === coffee.id);
        if (existing) {
            dispatch({ type: 'increment', payload: { id: coffee.id } });
        } else {
            dispatch({ type: 'add', payload: { coffee, quantity: 1 } });
        }
    }

    const removeCoffee = (id: number) => {
        dispatch({
            type: 'remove',
            payload: {
                id
            }
        })
    }

    const removeAll = () => {
        dispatch({
            type: 'removeAll'
        })
    }

    const increment = (id: number) => {
        dispatch({
            type: 'increment',
            payload: {
                id
            }
        })
    }

    const decrement = (id: number) => {
        dispatch({
            type: 'decrement',
            payload: {
                id
            }
        })
    }

    return(
        <CartContext.Provider value={ {cart, addCoffee, removeCoffee, removeAll, increment, decrement} }>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);                 