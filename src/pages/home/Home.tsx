import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"
import videoHome from "../../assets/video-home.mp4"

function Home() {
    return (
        <>
            <div className="bg-[#2c1a3a] flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja bem-vindo ao meu universo!
                        </h2>
                        <p className='text-xl'>
                            Onde magia e código se encontram
                        </p>

                        <div className="flex justify-around gap-4">
                            <ModalPostagem />
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <video
                            src={videoHome}
                            className='w-2/3 rounded-lg shadow-lg'
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </div>
                </div>
            </div>            <ListaPostagens />
        </>
    )
}

export default Home