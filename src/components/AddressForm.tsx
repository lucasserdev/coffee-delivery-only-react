import Image from "next/image";

type Props = {
    cep: string;
    setCep: (value: string) => void;
    road: string;
    setRoad: (value: string) => void;
    number: string;
    setNumber: (value: string) => void;
    complement: string;
    setComplement: (value: string) => void;
    district: string;
    setDistrict:(value: string) => void;
    city: string;
    setCity: (value: string) => void;
    uf: string;
    setUf: (value: string) => void;
}
export const AddressForm = ({cep, road, number, complement, district, city, uf, setCep, setRoad, setCity, setComplement, setDistrict, setNumber, setUf}: Props) => {
    
    return (
        <div className="w-full bg-base-card rounded-md p-6 md:p-10">
            <div className="flex gap-2 mb-8">
                <Image
                    src="/loc2.svg"
                    alt=""
                    width={18}
                    height={18}
                />
                <div>
                    <p className="text-base-subtitle">Endereço de Entrega</p>
                    <p className="text-sm text-base-text">Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <input
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                    className="bg-white border border-gray-300 rounded p-3 text-sm w-[35%] placeholder:text-base-text"
                    type="text"
                    placeholder="CEP"
                />
                <input
                    value={road}
                    onChange={e => setRoad(e.target.value)}
                    className="bg-white border border-gray-300 rounded p-3 text-sm w-full placeholder:text-base-text"
                    type="text"
                    placeholder="Rua"
                />
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                        className="bg-white border border-gray-300 rounded p-3 text-sm sm:w-[35%] placeholder:text-base-text"
                        type="text"
                        placeholder="Número"
                    />
                    <div className="relative flex-1">
                        <input
                            value={complement}
                            onChange={e => setComplement(e.target.value)}
                            className="bg-white border border-gray-300 rounded p-3 text-sm w-full placeholder:text-base-text"
                            type="text"
                            placeholder="Complemento"
                        />
                        <span className="absolute right-3 top-3 text-xs text-base-text italic">Opcional</span>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <input
                        value={district}
                        onChange={e => setDistrict(e.target.value)}
                        className="bg-white border border-gray-300 rounded p-3 text-sm sm:w-[35%] placeholder:text-base-text"
                        type="text"
                        placeholder="Bairro"
                    />
                    <input
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        className="bg-white border border-gray-300 rounded p-3 text-sm flex-1 placeholder:text-base-text"
                        type="text"
                        placeholder="Cidade"
                    />
                    <input
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        className="bg-white border border-gray-300 rounded p-3 text-sm sm:w-[15%] placeholder:text-base-text"
                        type="text"
                        placeholder="UF"
                    />
                </div>
            </div>
        </div>
    );
}