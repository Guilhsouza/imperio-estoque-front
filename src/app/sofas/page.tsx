import { Metadata } from "next";
import { roboto } from "../fonts/fonts";
import GenericCardSofas from "../../components/sofaPageComponents/GenericCardSofas"
import sofaEspecified from "../../images/sofa-especified.jpg"

export const metadata: Metadata = {
    title: 'Sofás | Império Sofás'
};

export default function SofasPage() {
    return (
        <>
            <h2 className={`text-center text-3xl mt-9 ${roboto.className}`}>Selecione o modelo desejado!</h2 >
            <div className="w-full grid grid-cols-4 justify-self-center gap-6 px-16">
                <GenericCardSofas title="Sofa xyz" cardImage={sofaEspecified} hrefLink='/sofas/imperio' altImage="Foto Do Sofá" />
                <GenericCardSofas title="Sofa xpto" cardImage={sofaEspecified} hrefLink='/sofas/newyork' altImage="Foto Do Sofá" />
                <GenericCardSofas title="Sofa xpto" cardImage={sofaEspecified} hrefLink='/sofas/newyork' altImage="Foto Do Sofá" />
                <GenericCardSofas title="Sofa xpto" cardImage={sofaEspecified} hrefLink='/sofas/newyork' altImage="Foto Do Sofá" />
                <GenericCardSofas title="Sofa xpto" cardImage={sofaEspecified} hrefLink='/sofas/newyork' altImage="Foto Do Sofá" />
                <GenericCardSofas title="Sofa xpto" cardImage={sofaEspecified} hrefLink='/sofas/newyork' altImage="Foto Do Sofá" />
                <GenericCardSofas title="Sofa xpto" cardImage={sofaEspecified} hrefLink='/sofas/newyork' altImage="Foto Do Sofá" />
                <GenericCardSofas title="Sofa xpto" cardImage={sofaEspecified} hrefLink='/sofas/newyork' altImage="Foto Do Sofá" />
            </div>
        </>
    )
}