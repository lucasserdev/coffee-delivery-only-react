import { coffeList } from "@/data/coffeeList";
import { CoffeCard } from "./CoffeeCard";

export const CoffeeList = () => {
    return(
        <section className="px-4 sm:px-8 md:px-20 lg:px-40 text-[32px] text-base-title font-extrabold pb-15">
            <h2 className="mb-10">Nossos cafés</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
                {coffeList.map(item => (
                    <CoffeCard 
                        key={item.id}
                        coffee={item}
                    />
                ))}
            </div>
        </section>
    );
}