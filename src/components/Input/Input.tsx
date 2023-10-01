import React, {useState,InputHTMLAttributes } from "react"
type props = InputHTMLAttributes<HTMLInputElement> & {
    left?: React.ReactNode;
    right?: React.ReactNode;
    size?:'8'|'10'|'12'
};
export const Input = ({...rest }:props) => {

    return (
        <div 
            className={`
                w-full 
                flex 
                items-center
                bg-gray-100
                h-${rest.size?rest.size:'12'}
                rounded-[4px] 
                py-3 px-2
                mt-4
                gap-2 
            `}
        >
            { rest.left && rest.left }
            <input className="w-full h-full bg-gray-100 outline-none text-gray-700" {...rest}/>
            { rest.right && rest.right }
        </div>
    )
}