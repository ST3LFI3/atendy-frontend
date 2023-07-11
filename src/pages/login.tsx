import Login from "@/components/Auth/Login"
import Seo from "@/components/Seo"

export default function LoginPage(){
    return (
        <>
            <Seo title="Entrar - Atendy" description="Faça agora seu login e aproveite nossa plataforma" />
            <Login />
        </>
    )
}