import { Link } from 'react-router-dom'
import type Tema from '../../../models/Tema'

interface CardTemaProps {
    tema: Tema
}

function CardTema({ tema }: CardTemaProps) {
    return (
        <div className='border border-black flex flex-col rounded-2xl overflow-hidden justify-between bg-[#eae5ef] shadow-md hover:shadow-lg transition-all duration-300'>
            <header className='py-2 px-6 bg-[#2c1a3a] text-white font-bold text-2xl'>
                Tema
            </header>
            <p className='p-8 text-3xl bg-[#eae5ef] text-slate-800 h-full'>{tema.descricao}</p>

            <div className="flex">
                <Link to={`/editartema/${tema.id}`}
                    className='w-full text-slate-100 bg-[#2c1a3a] hover:bg-[#1e112a] 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`}
                    className='text-slate-100 bg-[#663178] hover:bg-[#4b175d] w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTema