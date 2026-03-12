'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = () => {
    const route = useRouter();

    const toggleCheckout = () => {
        route.push('/checkout')
    }
    return (
        <header className="w-full h-26 px-4 sm:px-8 md:px-20 lg:px-40 py-8 bg-white">
            <div className="flex justify-between items-center">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="logo coffee delivery"
                        height={40}
                        width={85}
                    />
                </Link>


                <div className="flex items-center justify-center gap-3">
                    <div className="bg-purple-light w-35.5 h-9.5 flex gap-2 items-center justify-center rounded-md">
                        <Image
                            src="/loc.svg"
                            alt="location"
                            width={22}
                            height={22}
                        />
                        <span className="text-sm text-purple-dark">Porto Alegre, RS</span>
                    </div>

                    <Image
                        onClick={toggleCheckout}
                        src="/Cart.svg"
                        alt=""
                        width={38}
                        height={38}
                    />
                </div>
            </div>
        </header>
    );
}