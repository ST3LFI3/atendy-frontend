import { PlaceProps } from "@/global/types"
import Image from "next/image"
import { IoLocationOutline } from 'react-icons/io5'

export default function CardLocale(place:PlaceProps){
    return <div 
        className="rounded shadow w-[250px]"
        style={{minWidth:250}}
    >
        <div className="w-full">
            { place.image && <Image 
                    src={place.image} 
                    alt={place.name} 
                    width={200} 
                    height={100}
                    className="object-cover w-full max-h-[120px] transition rounded-t"
                />
            }
        </div>
        <div 
            className="px-4 py-2 flex flex-col gap-3"
        >
            <span className="font-semibold text-lg">{ place.name }</span>
            <span className="font-normal text-sm">{ place.address }</span>
            <div className="flex gap-2 items-center">
                <IoLocationOutline className="text-secondary text-lg"/>
                <span className="font-normal text-sm text-gray-700">
                    { place.city } - { place.state }
                </span>
            </div>

        </div>
    </div>
}