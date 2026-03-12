'use client'
import { CoffeeList } from "@/components/CoffeeList";
import { IconsAndText } from "@/components/IconsAndText";
import Image from "next/image";

const Page  = () => {
  return(
    <div className="w-full bg-white">

      <section className="px-4 sm:px-8 md:px-20 lg:px-40 py-12 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-[32px] md:text-[48px] font-title leading-[130%] font-extrabold text-base-title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-lg md:text-xl mb-10 text-base-subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <IconsAndText icon="/IconCart.svg" text="Compra simples e segura" />
            <IconsAndText icon="/IconBox.svg" text="Embalagem mantém o café intacto" />
            <IconsAndText icon="/IconClock.svg" text="Entrega rápida e rastreada" />
            <IconsAndText icon="/IconCoffee.svg" text="O café chega fresquinho até você" />
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/Imagem.png"
            alt=""
            width={476}
            height={360}
            className="w-full max-w-sm md:max-w-none"
          />
        </div>
      </section>
      <CoffeeList  />
    </div>
  );
}

export default Page;