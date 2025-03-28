import { roboto } from "../fonts/fonts";
import SpecifiedRoomCard from '@/components/roomPageComponents/SpecifiedRoomCard'
import aparadorGeneric from '@/images/aparador-generic.jpg'
import painelGeneric from '@/images/painel-generic.jpg'

export default function pageRoom() {
    return (
        <>
            <title>Sala | Império Sofás</title>
            <h2 className={`text-3xl text-center mt-9 ${roboto.className}`}>Sala</h2>
            <p className="text-center my-5 text-gray-400">Aqui você vai encontra todos os produtos para a Sala!</p>
            <div>
                <h2 className="text-4xl ms-16 underline underline-offset-2">Aparadores</h2>
                <div className="w-full grid grid-cols-4 justify-self-center gap-6 px-16 mb-9">
                    <SpecifiedRoomCard title="exemplo 1" altImage="imagem exemplo" cardImage={aparadorGeneric} />
                    <SpecifiedRoomCard title="exemplo 1" altImage="imagem exemplo" cardImage={aparadorGeneric} />
                    <SpecifiedRoomCard title="exemplo 1" altImage="imagem exemplo" cardImage={aparadorGeneric} />
                    <SpecifiedRoomCard title="exemplo 1" altImage="imagem exemplo" cardImage={aparadorGeneric} />
                </div>
            </div>
            <hr className="mx-16 my-16" />
            <div >
                <h2 className="text-4xl ms-16 underline underline-offset-2">Painéis</h2>
                <div className="w-full grid grid-cols-4 justify-self-center gap-6 px-16 mb-9">
                    <SpecifiedRoomCard title="exemplo 1" altImage="imagem exemplo" cardImage={painelGeneric} />
                    <SpecifiedRoomCard title="exemplo 1" altImage="imagem exemplo" cardImage={painelGeneric} />
                    <SpecifiedRoomCard title="exemplo 1" altImage="imagem exemplo" cardImage={painelGeneric} />
                    <SpecifiedRoomCard title="exemplo 1" altImage="imagem exemplo" cardImage={painelGeneric} />
                </div>
            </div>

        </>
    )
}