import { Link } from 'react-router-dom'
import type Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className='border-black border 
            flex flex-col rounded-2xl overflow-hidden justify-between bg-[#eae5ef] shadow-md hover:shadow-lg transition-all duration-300'>

            <div>
                <div className="flex w-full bg-[#2c1a3a] text-white py-2 px-4 items-center gap-4">
                    <img
                        src={postagem.usuario?.foto}
                        className='h-12 rounded-full'
                        alt={postagem.usuario?.nome} />
                    <h3 className='text-lg font-bold text-center uppercase text-white'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 text-slate-700'>
                    <h4 className='text-lg font-semibold uppercase text-slate-900'>{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat("pt-BR", {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${postagem.id}`}
                    className='w-full text-white bg-[#2c1a3a] 
                    hover:bg-[#1e112a] flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`}
                    className='text-white bg-[#663178] 
                    hover:bg-[#4b175d] w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem