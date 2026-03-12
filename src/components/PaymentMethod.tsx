import { useOrder } from "@/contexts/OrderContext";
import { PaymentMethodType } from "@/types/PaymentMethodType";
import Image from "next/image";

export const PaymentMethod = () => {
    const methodPayment: PaymentMethodType[] = [
        {
            id: 1,
            name: 'cartão de crédito',
            icon: '/credit.svg'
        },
        {
            id: 2,
            name: 'cartão de débito',
            icon: '/debit.svg'
        },
        {
            id: 3,
            name: 'dinheiro',
            icon: '/cash.svg'
        },

    ];

    const orderCtx = useOrder()

    const toggleMethodBtn = (method: PaymentMethodType) => {
        if(!method) return false;

        orderCtx?.setMethodPayment(method);
    }


    return(
        <div className="w-full bg-base-card rounded-md p-6 md:p-10">
            <div className="flex gap-3">
                <Image
                    src="/money.svg"
                    alt=""
                    width={22}
                    height={22}
                />
                <div>
                    <p className="text-lg text-base-title font-normal">Pagamento</p>
                    <p>O pagamento é feit na entraga. Escolha a forma que deseja pagar</p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                {methodPayment.map(method => (
                    <button 
                        onClick={() => toggleMethodBtn(method)}
                        className={`border border-gray-200 flex gap-2 bg-gray-200 p-2 rounded-md justify-center uppercase text-[12px] items-center cursor-pointer ${orderCtx?.methodPayment.id === method.id ? 'border border-purple' : ''}`}
                        key={method.id}
                    >
                        <Image 
                            src={method.icon}
                            alt=""
                            width={16}
                            height={16}
                        />
                        {method.name}
                    </button>
                ))}
            </div>
        </div>
    );
}