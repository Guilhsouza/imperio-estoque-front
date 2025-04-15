import { roboto } from '../fonts/fonts'
import SpecifiedKitchenCard from '@/components/kitchenPageComponents/SpecifiedKitchenCard'
import liquificadorGeneric from '@/images/liquidificador-generic.jpg'

const kitchenPage = () => {
    return (
        <>
            <title>Cozinha | Império Sofás</title>
            <h2 className={`text-3xl text-center mt-9 ${roboto.className}`}>Cozinha</h2>

            <div className='grid grid-cols-4 px-16 gap-6 mb-16'>
                <SpecifiedKitchenCard altImage='imagemteste' title='Exemplo 2' cardImage={liquificadorGeneric} />
                <SpecifiedKitchenCard altImage='imagemteste' title='Exemplo 2' cardImage={liquificadorGeneric} />
                <SpecifiedKitchenCard altImage='imagemteste' title='Exemplo 2' cardImage={liquificadorGeneric} />
                <SpecifiedKitchenCard altImage='imagemteste' title='Exemplo 2' cardImage={liquificadorGeneric} />
                <SpecifiedKitchenCard altImage='imagemteste' title='Exemplo 2' cardImage={liquificadorGeneric} />
            </div>
        </>
    )
}

export default kitchenPage