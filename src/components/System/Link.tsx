import Link from "next/link"

interface props{
    text : string,  
    href?:string,
    className?: string
}
export const Linking = (props:props) => {
    return <Link href={props?.href || '/'} className="bg-primary px-3 py-2 text-[white] rounded text-sm" {...props}>
        { props.text }
    </Link>
}