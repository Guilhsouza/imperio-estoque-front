'use client'
import { roboto } from "../fonts/fonts";
import SpecifiedBedsCard from "@/components/bedsPageComponents/SpecifiedBedsCard";
import camaGeneric from "@/images/cama-generic.jpg"
import { useRef } from "react";

export default function BedsAndMattress() {
    const mattressElement = useRef<HTMLDivElement | null>(null)

    const scrollToMattressSection = () => {
        mattressElement.current?.scrollIntoView({ behavior: 'smooth' })
    }


    return (
        <>
            <title>Camas e Colchões | Império Sofás</title>
            <h2 className={`text-center text-3xl mt-9 ${roboto.className}`}>Camas e Colchões</h2>
            <p className="text-center mt-5 text-gray-400">Aqui você vai encontrar o estoque das camas e colchões!</p>

            <div className="flex justify-center">
                <button
                    className="rounded-full mt-5 px-5 py-2 bg-standardGreen text-standardBlack"
                    onClick={scrollToMattressSection}>
                    Quer pular para os colchões? Clique Aqui!
                </button>
            </div>

            <div id="beds">
                <h3 className="underline text-4xl ms-16">Camas</h3>
                <div className="w-full grid grid-cols-4 justify-self-center gap-6 px-16">
                    <SpecifiedBedsCard altImage="cama padrao" title="Cama yxz" cardImage={camaGeneric} />
                    <SpecifiedBedsCard altImage="cama padrao" title="Cama yxz" cardImage={camaGeneric} />
                    <SpecifiedBedsCard altImage="cama padrao" title="Cama yxz" cardImage={camaGeneric} />
                    <SpecifiedBedsCard altImage="cama padrao" title="Cama yxz" cardImage={camaGeneric} />
                </div>
            </div>
            <hr className="mx-16 my-12" />
            <div id="mattress" ref={mattressElement}>
                <h3 className="underline text-4xl ms-16">Colchões</h3>
                <div className="w-full grid grid-cols-4 justify-self-center gap-6 px-16 mb-9">
                    <SpecifiedBedsCard altImage="cama padrao" title="Cama yxz" cardImage={camaGeneric} />
                    <SpecifiedBedsCard altImage="cama padrao" title="Cama yxz" cardImage={camaGeneric} />
                    <SpecifiedBedsCard altImage="cama padrao" title="Cama yxz" cardImage={camaGeneric} />
                    <SpecifiedBedsCard altImage="cama padrao" title="Cama yxz" cardImage={camaGeneric} />
                </div>
            </div>
        </>
    )
}