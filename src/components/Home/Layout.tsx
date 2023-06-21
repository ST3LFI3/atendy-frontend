import { BoxSearch } from "../BoxSearch/BoxSearch";
import { HeaderHome } from "../HeaderHome/HeaderHome";
import { Navbar } from "../Navbar/Navbar";
import CardLocale from "./CardLocale";

interface Props{
    children: React.ReactNode
}

export default function Layout({ children }:Props){
    return <>
        <HeaderHome>
            <Navbar />
            <BoxSearch />
        </HeaderHome>
        <div className="py-4 px-4 min-h-[500px]">
            { children }
        </div>
    </>
}