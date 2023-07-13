import Image from 'next/image'
import GoogleImage from '../../../public/google.svg'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Login(){
    const {data:session} = useSession();

    if(session){
        return(<>
                <div>Logado {session.user?.email}</div>
                <button onClick={() => signOut()}>Sair</button>
            </>
        )
    }else{        
        return (
            <div 
                className="
                    h-screen 
                    bg-primary-light-gradient
                    flex
                    justify-center
                    items-center
                    shadow-sm   
                    flex-col             
                "
            >
                <div 
                    className="
                        w-[350px]
                        md:w-[500px]
                        py-8
                        bg-white
                        rounded
                        px-8
                    "
                >
                    <div className="w-full text-center">
                        <span 
                            className="text-center font-bold text-[#3f3f3f] text-xl"
                        >
                            Acesse sua conta
                        </span>
                        <button 
                            className="
                                w-full                             
                                py-2
                                mt-5 
                                rounded
                                bg-[#F4F4FF]
                                text-sm
                                flex
                                items-center                   
                                justify-center
                                transition
                                hover:bg-primary-light
                                hover:text-white
                            "
                            onClick={() => signIn() }
                        >
                            <div className='mr-6'>
                                <Image 
                                    src={GoogleImage} 
                                    priority
                                    alt='Login com Google'                                
                                />
                            </div>                        
                            <span>Continuar com o Google</span>
                        </button>
                    </div>

                    <div className='w-full mt-4 flex justify-between items-center mb-4'>
                        <div className='border-t border-gray-300 h-1 w-[40%]'></div>
                        <span className='text-gray-700'>ou</span>
                        <div className='border-t border-gray-300 h-1 w-[40%]'></div>
                    </div>

                    <div className='w-full'>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-semibold text-gray-600 dark:text-white">Email</label>
                        <input type='email' className='bg-input w-full py-2 px-3 rounded outline-none text-md text-gray-700' />
                    </div>

                    <div className='w-[100%] mt-3'>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-semibold text-gray-600 dark:text-white">Informe sua senha</label>
                        <input type='text' className='bg-input w-full py-2 px-3 rounded outline-none text-md text-gray-700' />
                    </div>  

                    <button className='bg-primary w-full mt-4 py-3 px-3 text-white hover:bg-primary-light transition rounded font-semibold text-sm'>
                        Entrar    
                    </button>         
                </div>
                <div className='mt-3'>
                    <span className='text-sm font-medium gap-1 flex'>
                        Ainda não tem uma conta? 
                        <Link className='text-primary' href={'/sigin'}><u>Faça seu cadastro</u></Link>    
                    </span>
                </div>
            </div>
        )
    }
}