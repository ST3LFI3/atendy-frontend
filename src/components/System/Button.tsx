interface props{
    text : string,  
    className?: string  
}
export const Button = (props:props) => {
    return <button className="bg-primary px-3 py-2 text-[white] rounded text-sm" {...props}>
        { props.text }
    </button>
}