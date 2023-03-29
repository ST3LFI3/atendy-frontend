import React from "react"

interface Props{
    children: React.ReactNode
}

export default function Layout({ children }:Props){
    return <div>
        <ul>Menu</ul>
        { children }
    </div>
}