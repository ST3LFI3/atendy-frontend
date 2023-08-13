import {useState} from "react"
type props = {
    selected?:boolean
    icone?:React.ReactNode,
    size?:'8'|'10'|'12'
}
import { AiOutlineUser} from 'react-icons/ai'
export const OvalCard = ({...rest }:props) => {
   
    return (
        <div 
            className={`
            bg-gradient-to-r
            from-primary 
            to-secondary 
            w-${rest?.size?rest.size:'8'} 
            h-${rest?.size?rest.size:'8'}  
            rounded-full 
            flex 
            items-center 
            justify-center
            ${rest.selected&&'border-2 border-b-dark'}
            `}>
            {rest.icone
                ?
                rest.icone:
                <AiOutlineUser className="text-gray-500 text-4xl"/>
            }
        </div>
    )
}