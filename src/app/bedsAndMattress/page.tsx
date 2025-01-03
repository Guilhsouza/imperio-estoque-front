import { Metadata } from "next";
import { roboto } from "../fonts/fonts";
import SpecifiedSofaCard from "@/components/sofaPageComponents/SpecifiedSofaCard";
import camaGeneric from "@/images/cama-generic.jpg"

export const metadata: Metadata = {
    title: "Camas e Sofás | Império Sofás"
};


export default function bedsAndMattress() {
    return (
        <>
            <h2 className={`text-center text-3xl mt-9 ${roboto.className}`}>Camas e Colchões</h2>
            <p className="text-center mt-5 text-gray-400">Aqui você vai encontrar o estoque das camas e colchões!</p>

            <div className="flex justify-center">
                <button className="rounded-full mt-5 p-2 bg-standardGreen text-standardBlack">Quer pular para os colchões? Clique Aqui!</button>
            </div>

            <div id="beds">
                <h3 className="underline text-4xl ms-16">Camas</h3>
                <div className=" grid grid-cols-4 gap-6 justify-self-center px-16">
                    <SpecifiedSofaCard altImage="cama padrao" title="Cama yxz" cardImage={camaGeneric} />
                    <SpecifiedSofaCard altImage="cama padrao" title="Cama yxz" cardImage={camaGeneric} />
                    <SpecifiedSofaCard altImage="cama padrao" title="Cama yxz" cardImage={camaGeneric} />
                    <SpecifiedSofaCard altImage="cama padrao" title="Cama yxz" cardImage={camaGeneric} />
                </div>
            </div>
            <hr className="mx-16 my-12" />
            <div id="mattress">
                <h3 className="underline text-4xl ms-16">Colchões</h3>
            </div>
        </>
    )
}