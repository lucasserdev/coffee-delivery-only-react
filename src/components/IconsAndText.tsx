import Image from "next/image";

type Props = {
    icon: string;
    text: string;
}
export const IconsAndText = ({icon, text}: Props) => {
    return(
        <div className="flex items-center gap-3 text-md text-base-text">
            <Image 
                src={icon}
                alt=""
                width={32}
                height={32}
            />

            {text}
        </div>
    );
}