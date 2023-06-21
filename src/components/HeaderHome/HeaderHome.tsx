interface props{
    children: React.ReactNode
}
export const HeaderHome = ({ children }:props) => {
    return (
        <div 
            className="
                h-[600px] 
                bg-gradient-to-tl 
                from-primary-gradient 
                from-90% 
                via-primary-light-gradient 
                via-80% 
                d-flex 
                flex-row 
                items-center 
                justify-center
            "
        >
            { children }
        </div>
    )
}