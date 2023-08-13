import { useState } from "react"
import Image from "next/image"
import ImgBanner from '../../assests/banner-barbeiro.png'
import { IoLocationOutline} from 'react-icons/io5'
import { ButtonDefault} from "../ButtonDefult/Button"
import { LineOvalCard } from "../LineOvalCard/LineOvalCard"
import Penteado from '../../assests/barba.png'
import {ModalCreatePassword} from "../ModalCreatePassword/ModalCreatePassword"
export default function ListPasswords(){
    const[modalPassword,setModalPassword] = useState(false)

    const renderBarber = ()=>{
        const barber = [
            {  
                icone:<Image  src={Penteado} alt="Barbeiro" className="object-center w-5 transition rounded-t"/>,
                nome:'Caio Eduardo',
                senhas:'20 senhas'
            },
            {  
                icone:<Image  src={Penteado} alt="Barbeiro" className="object-center w-5 transition rounded-t"/>,
                nome:'Gabriel noves',
                senhas:'1 senhas'
            },
            {  
                icone:<Image  src={Penteado} alt="Barbeiro" className="object-center w-5 transition rounded-t"/>,
                nome:'Ronaldo ',
                senhas:'2 senhas'
            },
            {  
                icone:<Image  src={Penteado} alt="Barbeiro" className="object-center w-5 transition rounded-t"/>,
                nome:'Caio vinicius ',
                senhas:'4 senhas'
            },
        ]
        let vet:any = []
        barber.map((item,index)=>{
            vet.push(
                <LineOvalCard 
                    icone={item.icone}
                    label={item.nome}
                    labelLeft={item.senhas}
                />
            )
        })
        return vet
    }

    return (
        <div className="w-full block md:flex bg-white-ligth ">
            <ModalCreatePassword isVisible={modalPassword} close={()=>setModalPassword(false)}/>
            <div className="w-full md:w-[50%]">
                <div>
                    <Image 
                        src={ImgBanner}
                        alt="Banner"
                        className="object-cover w-full max-h-[350px] transition rounded-t"
                    />
                </div>
                <div>
                    <div className="w-full p-2 pr-4 flex justify-between mt-4">
                        <span className="font-semibold text-lg">O lenhador MS</span>
                        <ButtonDefault  
                           icon={<IoLocationOutline className="text-lg"/>}
                           label="ABRIR NO MAPA" 
                           theme="primary"
                        />
                    </div>
                    <div className="w-full p-2 pl-4 gap-2 flex items-center">
                        <IoLocationOutline className="text-primary text-lg"/>
                        <span className="w-full font-medium sm:text-xs">Rua doutor wanilton finamore, 1075 - dourados, ms</span>
                    </div>
                </div>
                <div className="w-full pl-4 pr-4 mt-5 mb-10">
                    <span className="font-bold">EQUIPE</span>
                    {renderBarber()}
                </div>
            </div>
            <div className="w-full md:w-[50%] flex items-start justify-center mt-20 mb-20">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <span className="text-4xl font-semibold">Úlima Senha</span>
                    <div className="border-8 border-primary w-60 h-60 rounded-full flex items-center justify-center">
                        <label className="text-6xl text-primary">
                            68
                        </label>
                    </div>
                    <ButtonDefault  
                        icon={<span className="text-sm font-semibold">+</span>}
                        label="Gerar senha" 
                        theme="primary"
                        inverted
                        size="w-40"
                        onClick={()=>setModalPassword(true)}
                    />
                </div>
            </div>
        </div>
    )
}