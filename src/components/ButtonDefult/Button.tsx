import {useState} from "react"
type props = {
    label?: string,
    icon?:React.ReactNode,
    theme:string,
    onClick?:Function,
    inverted?:boolean,
    size?:'w-20'|'w-40'|'w-60'|'w-80'
}
export const ButtonDefault   = ({...rest }:props) => {
    const [isHovered, setIsHovered] = useState(false);
    const theme = ()=>{
        let primary =''
        if(rest.inverted){
            primary = !isHovered?`text-white bg-${rest.theme} border-${rest.theme}`:`text-${rest.theme} border-${rest.theme}`
        }else{
            primary = !isHovered?`text-${rest.theme} border-${rest.theme}`:`text-white bg-${rest.theme} border-${rest.theme}`
        }
        return primary
    }

    return (
        <div 
            className={`
                ${theme()} 
                hover:${theme()} 
                ${rest.size?rest.size:''}
                border-2 
                rounded 
                p-2 
                gap-2 
                flex 
                items-center 
                justify-center
                cursor-pointer
                transition-all
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={()=>rest.onClick&&rest.onClick()}
        >
            {rest.icon&&rest.icon}
            {rest.label&&<span className="text-xs font-bold" >{rest.label&&rest.label}</span>}
        </div>
    )
}