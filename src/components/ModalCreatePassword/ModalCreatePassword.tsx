
import { useState } from 'react'
import { MdOutlineClose} from 'react-icons/md'
import { OvalCard } from '../OvalCard/OvalCard'
import Penteado from '../../assests/barba.png'
import Image from "next/image"
import { formatName } from '@/global/functions'
import { Input } from '../Input/Input'
import { AiOutlineUser} from 'react-icons/ai'
import { BsPhone,BsCheck2Circle} from 'react-icons/bs'
import { ButtonDefault } from '../ButtonDefult/Button'
import { Balancer } from 'react-wrap-balancer'
interface props{
    isVisible:boolean
    close:Function
}

export const ModalCreatePassword = ({ isVisible,close}:props) => {
    const[barberSelected,setBarberSelected] = useState<number|null>(null)
    if(!isVisible) return null

    const renderBarber = ()=>{
        const barber = [
            {  
                icone:<Image  src={Penteado} alt="Barbeiro" className="object-center w-5 transition rounded-t"/>,
                nome:'Caio Eduardo',
            },
            {  
                icone:<Image  src={Penteado} alt="Barbeiro" className="object-center w-5 transition rounded-t"/>,
                nome:'Gabriel noves',
            },
            {  
                icone:<Image  src={Penteado} alt="Barbeiro" className="object-center w-5 transition rounded-t"/>,
                nome:'Ronaldo ',
            },
            {  
                icone:<Image  src={Penteado} alt="Barbeiro" className="object-center w-5 transition rounded-t"/>,
                nome:'Caio vinicius ',
            },
        ]

        let vet:any = []
        barber.map((item,index)=>{
            vet.push(
                <button 
                    className="
                        flex 
                        flex-col 
                        justify-between 
                        w-full 
                        items-center 
                        py-4                        
                    "
                    onClick={()=>setBarberSelected(index)}
                >
                    <OvalCard 
                        key={index}
                        selected={index == barberSelected}
                        size='12' 
                        className="py-4 px-4"
                        icone={item.icone} 
                    />
                    <label className='text-sm mt-2'>{ formatName(item.nome) }</label>
                </button>
            )
        })
        return vet
    }

    return (
       <div className="
            fixed 
            inset-0 
            bg-gray-900 
            bg-opacity-25 
            backdrop-blur-sm 
            flex 
            justify-center 
            items-center
            transition-transform
        ">
            <div className="w-[95%] md:w-[600px]">
                <div className="bg-white rounded p-2">
                    <div className='w-full flex items-center justify-between '>
                        <div className='w-[100%] flex justify-center'>
                            <span className='text-2xl font-semibold '>
                                Estamos <span className='text-primary'>quase</span> lá
                            </span> 
                        </div>
                        <button onClick={()=>close&&close()}>
                            <MdOutlineClose className="text-gray-500 text-4xl"/>
                        </button>
                    </div>
                    <div className='w-full p-6'>
                        <span className='font-medium '>Selecione o profissional</span>
                        <div className='flex gap-4 mt-2'>
                            { renderBarber() }
                        </div>
                        <Input 
                            left={<AiOutlineUser className="text-secondary text-xl"/>}
                            placeholder='Informe seu nome'
                        />
                        <Input 
                            left={<BsPhone className="text-secondary text-xl"/>}
                            placeholder='Informe seu celular'
                        />
                        
                        <span className='text-justify text-gray-700 text-xs my-2'>
                            Ao continuar navegando neste site, você concorda com nossa 
                            <span className='text-primary font-bold'> Politica de Privacidade</span>{' '} 
                            e nossos <span className='text-primary font-bold'>Termos de Uso</span>  
                        </span>
                    </div>
                    <div className='w-full flex items-center justify-center mb-8'>
                        <ButtonDefault  
                            icon={<BsCheck2Circle className="text-secondary text-xl"/>}
                            label="CONFIRMAR" 
                            theme="primary"
                            inverted
                            size="w-60"
                        />
                    </div>
                </div>
            </div>
       </div> 
    )
}