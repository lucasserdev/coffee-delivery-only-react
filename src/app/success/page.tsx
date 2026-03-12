'use client'
import { useOrder } from "@/contexts/OrderContext";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
    const orderCtx = useOrder();
    const router = useRouter();
    
    useEffect(() => {
        if(orderCtx?.address.cep === '' || orderCtx?.methodPayment.name === '') {
            router.push('/checkout')
        }
    }, [])
    return(
        <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-10 md:py-20 bg-white text-black h-screen">
            <h2 className="text-yellow font-title font-extrabold text-4xl">Uhu! Pedido confirmado</h2>
            <p className="text-xl">Agora é só aguardar que logo o café chegara até você</p>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1 border border-yellow rounded-tl-md rounded-tr-4xl rounded-br-md rounded-bl-4xl mt-5 p-5 flex flex-col justify-center">
                    <div className="flex gap-2 mb-3">
                        <Image 
                            src="/loc3.svg"
                            alt=""
                            width={32}
                            height={32}
                        />
                        <div>
                            <p>Entrega em <span className="font-bold">{orderCtx?.address.road}, {orderCtx?.address.number}</span></p>
                            <p>{orderCtx?.address.district} - {orderCtx?.address.city}{orderCtx?.address.uf ? ',' : ''} {orderCtx?.address.uf}</p>
                        </div>
                    </div>

                    <div className="flex gap-2 mb-3">
                        <Image 
                            src="/clock2.svg"
                            alt=""
                            width={32}
                            height={32}
                        />
                        <div>
                            <p>Previsão de entrega</p>
                            <p className="font-bold">20 min - 30 min</p>
                        </div>
                    </div>

                    <div className="flex gap-2 mb-3">
                        <Image 
                            src="/money2.svg"
                            alt=""
                            width={32}
                            height={32}
                        />
                        <div>
                            <p>Pagamento na entrega</p>
                            <p className="font-bold capitalize">{orderCtx?.methodPayment.name}</p>
                        </div>
                    </div>

                </div>

                <div className="flex-1">
                    <Image 
                        src="/Illustration.png"
                        alt=""
                        width={492}
                        height={293}
                    />
                </div>
            </div>
        </div>
    );
}

export default Page;