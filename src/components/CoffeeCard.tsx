import { useCart } from "@/contexts/CartContext";
import { CoffeType } from "@/types/CoffeType";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
    coffee: CoffeType;
}
export const CoffeCard = ({ coffee }: Props) => {
    const cartCtx = useCart();
    const router = useRouter();
    const cartItem = cartCtx?.cart.find(item => item.coffee.id === coffee.id)

    const increment = () => {
        if(cartItem) {
            cartCtx?.increment(coffee.id)
        } else {
            cartCtx?.addCoffee(coffee)
        }
    }

    const decrement = () => {
        if(cartItem) {
            cartCtx?.decrement(coffee.id)
        }
    }

    const goToCheckout = () => {
        if (!cartItem) {
            cartCtx?.addCoffee(coffee);
        }
        router.push('/checkout');
    }

    return (
        <div className="bg-base-card w-full flex flex-col justify-center items-center px-4 py-3 rounded-bl-4xl rounded-tr-4xl rounded-tl-md rounded-br-md">
            <Image
                className="-mt-7"
                src={coffee.image}
                alt=""
                width={120}
                height={120}
            />
            <div className="flex gap-1 flex-wrap justify-center">
                {coffee.category.map(cat => (
                    <p key={cat} className="text-[10px] text-yellow-dark bg-yellow-light p-1 rounded-md uppercase my-4">{cat}</p>
                ))}
            </div>
            <h2 className="text-base-title font-title text-xl text-center">{coffee.name}</h2>
            <p className="text-[#8D8686] text-[14px] text-center font-normal mb-5">{coffee.description}</p>
            <div className="flex justify-between items-center w-full">
                <p className="text-2xl"><span className="text-lg">R$</span> {coffee.price.toFixed(2).replace('.', ',')}</p>
                <div className="flex gap-2 text-lg items-center">
                    <div className="bg-gray-200 rounded-md h-9.5 w-18 flex justify-center items-center gap-2">
                        <button className="cursor-pointer" onClick={decrement}>
                            <img src="/negative.svg" alt="" />
                        </button>
                        {cartItem?.quantity ?? 0}
                        <button className="cursor-pointer" onClick={increment}>
                            <img src="/positive.svg" alt="" />
                        </button>
                    </div>
                    <button onClick={goToCheckout}>
                        <Image
                            src="/Button.svg"
                            alt="Ir para o carrinho"
                            width={38}
                            height={38}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
