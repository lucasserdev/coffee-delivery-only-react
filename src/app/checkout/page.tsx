'use client'
import { AddressForm } from "@/components/AddressForm";
import { PaymentMethod } from "@/components/PaymentMethod";
import { useCart } from "@/contexts/CartContext";
import { useOrder } from "@/contexts/OrderContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useState } from "react";

const Page = () => {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(price)
    }

    const [cep, setCep] = useState('');
    const [road, setRoad] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [district, setDistrict] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const router = useRouter()
    const orderCtx = useOrder();
    const cartCtx = useCart();

    const total = cartCtx?.cart.reduce((acumulador, item) => {
        return acumulador + (item.coffee.price * item.quantity)
    }, 0) ?? 0

    const confirmhOrder = () => {
        if (cep === '' || road === '' || number === '' || district === '' || city === '') return false;

        orderCtx?.addAddress({
            cep: cep,
            city: city,
            complement: complement,
            district: district,
            number: number,
            road: road,
            uf: uf
        })  

        cartCtx?.removeAll();
        router.push('/success')
    }

    const removeCoffee = (id: number) => {
        cartCtx?.removeCoffee(id);
    }

    const incrementItem = (id: number) => {
        cartCtx?.increment(id);
    }

    const decrementItem = (id: number) => {
        cartCtx?.decrement(id);
    }

    return (
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 flex flex-col lg:flex-row gap-10 bg-white text-black py-8 h-screen">
            <div className="flex gap-3 flex-col">
                <h2 className="font-title text-lg text-base-title font-extrabold">Complete seu pedido</h2>
                <AddressForm
                    cep={cep}
                    setCep={setCep}
                    city={city}
                    setCity={setCity}
                    complement={complement}
                    setComplement={setComplement}
                    district={district}
                    setDistrict={setDistrict}
                    number={number}
                    setNumber={setNumber}
                    road={road}
                    setRoad={setRoad}
                    uf={uf}
                    setUf={setUf}
                />
                <PaymentMethod />
            </div>

            <div>
                <h2 className="font-title text-lg text-base-title font-extrabold mb-3">Cafés selecionados</h2>
                <div className="w-full lg:w-112.25 bg-base-card rounded-tl-md rounded-tr-4xl rounded-br-md rounded-bl-4xl p-6 md:p-10">
                    {cartCtx?.cart.map(item => (
                        <div key={item.coffee.id} className="border-b border-gray-300 py-5 flex justify-between">
                            <div className="flex gap-5">
                                <Image
                                    src={item.coffee.image}
                                    alt=""
                                    height={64}
                                    width={64}
                                />
                                <div className="">
                                    <p className="mb-2">{item.coffee.name}</p>
                                    <div className="flex gap-2">
                                        <div className="bg-gray-200 rounded-md h-9.5 w-18 flex justify-center items-center gap-2">
                                            <button onClick={() => decrementItem(item.coffee.id)}>
                                                <img src="/negative.svg" alt="" />
                                            </button>
                                            {item.quantity}
                                            <button onClick={() => incrementItem(item.coffee.id)}>
                                                <img src="/positive.svg" alt="" />
                                            </button>
                                        </div>
                                        <button onClick={() => removeCoffee(item.coffee.id)} className="bg-gray-200 rounded-md px-2 flex items-center gap-1">
                                            <Image
                                                src="/del.svg"
                                                alt=""
                                                height={16}
                                                width={16}
                                            />
                                            REMOVER
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p className="font-bold text-xl">{formatPrice(item.coffee.price)}</p>
                        </div>
                    ))}

                    <div className="flex flex-col gap-1">
                        <p className="mt-3 flex justify-between">Total de itens <span>{formatPrice(total)}</span> </p>
                        <p className="mt-3 flex justify-between">Entrega <span>{formatPrice(3.50)}</span> </p>
                        <p className="mt-3 flex justify-between font-bold text-xl">Total <span>{formatPrice(total + 3.50)}</span> </p>
                    </div>

                    <button onClick={confirmhOrder} className="bg-yellow text-white w-full rounded-md font-bold py-4 mt-5">CONFIRMAR PEDIDO</button>
                </div>
            </div>
        </div>
    );
}

export default Page;