import Signin from "@/components/Auth/Signin"
import Seo from "@/components/Seo"

export default function SigninPage(){
    return <>
        <Seo title="Cadastre-se - Atendy" description="Faça agora seu cadastro e aproveite nossa plataforma" />
        <Signin />
    </>
}