'use client'
import { AddressReducer } from "@/reducers/AddressReducer";
import { AddressType } from "@/types/AddressType";
import { PaymentMethodType } from "@/types/PaymentMethodType";
import React, { createContext, useContext, useReducer, useState } from "react";

type ContextType = {
    address: AddressType;
    addAddress: (newAddress: AddressType) => void;
    methodPayment: PaymentMethodType;
    setMethodPayment: (method: PaymentMethodType) => void;
}
export const OrderContext = createContext<ContextType | null>(null);

export const OrderProvider = ({children}: {children: React.ReactNode}) => {
    const initialState: AddressType = {
        cep: '',
        road: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        uf: ''
    }
    const [address, dispatch] = useReducer(AddressReducer, initialState);

    const addAddress = (newAddress: AddressType) => {
        dispatch({
            type: 'add',
            payload: newAddress
        })
    }

    const [methodPayment, setMethodPayment] = useState<PaymentMethodType>({
        id: 0,
        name: '',
        icon: ''
    })

    return(
        <OrderContext.Provider value={ {address, addAddress, methodPayment, setMethodPayment} }>
            {children}
        </OrderContext.Provider>
    );
}

export const useOrder = () => useContext(OrderContext);