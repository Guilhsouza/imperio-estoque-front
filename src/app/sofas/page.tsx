import { roboto } from "../fonts/fonts";
import GenericCardSofas from "../../components/GenericCardSofas"
import sofaEspecified from "../../images/sofa-especified.jpg"

export default function SofasPage() {
    return (
        <>
            <h2 className={`text-center text-3xl mt-9 ${roboto.className}`}>Selecione o modelo desejado!</h2 >

            <GenericCardSofas title="Titulo" cardImage={sofaEspecified} altImage="Foto Do Sofá" />
        </>
    )
}