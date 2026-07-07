import { LinkedinLogoIcon, GithubLogoIcon, Suitcase } from "@phosphor-icons/react"
import { useContext, type ReactNode } from "react"
import { AuthContext } from "../../contexts/AuthContext"


function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode
    
        if (usuario.token !== "") {
    
            component = ( 

                <div className="flex justify-center bg-[#2c1a3a] text-white">
                    <div className="container flex flex-col items-center py-4">
                        <p className='text-xl font-bold'>
                                Blog Eliane Orlandin | Copyright: {data}
                            </p>
                        <p className='text-lg'>Acesse minhas redes sociais</p>
                        <div className='flex gap-2'>
                            <a href="https://www.linkedin.com/in/elianeorlandindocarmo/" target="_blank">
                                <LinkedinLogoIcon size={48} weight='bold' />
                            </a>
        
                            <a href="https://github.com/Eliane-orlandin" target="_blank">
                                <GithubLogoIcon size={48} weight='bold' />
                            </a>

                            <a href="https://eliane-orlandin.github.io/portfolio-eliane-2/" target="_blank" rel="noopener noreferrer">
                                <Suitcase size={48} weight="bold" />
      </a>
            
                        </div>
                    </div>
                </div>

            )
        }

    return (
        <>
            { component }
        </>
    )
}

export default Footer