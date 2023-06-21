import Balancer from "react-wrap-balancer"
import { Button } from "../Button/Button"
import { AiOutlineSearch } from 'react-icons/ai'
import { RiScissors2Line } from 'react-icons/ri'
import { useState,useEffect } from "react";
import axios from "axios";


export const BoxSearch = () => {
    return (
        <div className="
            h-[350px] 
            w-
            flex
            items-center
            justify-center
            flex-col
            gap-4
            "        
        >
            
            <span 
                className="
                    text-secondary 
                    uppercase 
                    font-semibold 
                    md:text-sm
                    text-xs
                "
            >
                Praticidade e velocidade
            </span>
            
            <Balancer 
                className="
                    text-dark
                    md:text-3xl
                    text-xl
                    font-bold
                    md:w-[350px]
                    text-center
                "  
            >
                Encontre o local e  
                <span className="text-primary"> retire sua </span> 
                senha
            </Balancer>
            <div
                className="
                    md:w-[70%]
                    lg:w-[60%]
                    w-[90%]
                    py-6
                    px-6
                    flex
                    md:flex-row
                    flex-col
                    justify-between
                    gap-3
                    bg-neutral-50
                    rounded
                    border-[#EAEAEA]
                    mt-5
                "
            >
                <div 
                    className="
                        flex 
                        flex-row 
                        justify-around 
                        items-center
                        h-[40px] 
                        bg-gray-100
                        md:w-[50%]
                        w-[100%]
                        rounded-md
                        px-2
                    "
                >
                    <AiOutlineSearch 
                        size={24}
                        className="text-secondary"
                    />
                    <input 
                        type="text" 
                        className="
                            h-[100%] 
                            w-[80%]                            
                            bg-none 
                            bg-gray-100 
                            outline-none
                            text-sm
                            text-gray-700
                        "
                        placeholder="Pesquise por estabelecimento" 
                    />
                </div>

                <div 
                    className="
                        flex 
                        flex-row 
                        justify-around
                        items-center
                        h-[40px] 
                        bg-gray-100
                        md:w-[30%]
                        w-[100%]
                        rounded-md
                        px-2
                    "
                >
                    <RiScissors2Line 
                        size={24}
                        className="text-secondary"
                    />
                    <select  
                        className="
                            h-[100%] 
                            bg-none 
                            bg-gray-100 
                            text-gray-700
                            outline-none 
                            w-[80%]
                            text-sm
                        "
                        placeholder="Pesquise por estabelecimento" 
                    >
                        <option value="">Barbearia</option>                        
                        <option value="">Salão de Beleza</option>   
                        <option value="">Cabeleleiro</option>   
                    </select>
                </div>

                <div
                    className="w-[100%] md:w-[20%] flex justify-end"
                >
                    <button                        
                        className="
                            bg-primary 
                            md:px-5 
                            px-3
                            py-2 
                            text-[white] 
                            rounded 
                            text-[10px] 
                            font-semibold
                            h-[40px]
                        "
                        key={1}
                    >                 
                        <span className="hidden md:block">BUSCAR</span>
                        <AiOutlineSearch 
                            color="#FFF" 
                            size={26}
                            className="block md:hidden"
                        />
                    </button>
                </div>  

            </div>
        </div>
    )
}