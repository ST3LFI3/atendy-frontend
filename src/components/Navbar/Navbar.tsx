import Image from "next/image"
import Link from "next/link"
import { Button } from "../Button/Button"

export const Navbar = () => {
    return <div className="w-full flex items-center justify-center py-3 on md:sticky top-0 z-50 ">
        <div className="container flex justify-between px-4">
            <div className="flex items-center justify-center">
                <Image 
                    src={'/logo.png'} 
                    alt="Test"
                    width={120} 
                    height={40}
                    className=""
                />
            </div>
            <div className="flex justify-between items-center hidden md:flex">
                <Link 
                    href={'#about'} 
                    className="px-2 text-primary text-sm hover:text-primary-light"
                >
                    Quem somos?
                </Link>
                <Link 
                    href={'#about'} 
                    className="px-2 text-primary text-sm hover:text-primary-light"
                >
                    Recursos
                </Link>

                <Link 
                    href={'#about'} 
                    className="px-2 text-primary text-sm hover:text-primary-light"
                >
                    Planos e preços
                </Link>                
            </div>
            <div className="flex items-center">
                <button className="text-primary mx-3 text-sm">Login</button>
                <Button
                    text="Começe já"
                />
            </div>
        </div>
        
    </div>
}