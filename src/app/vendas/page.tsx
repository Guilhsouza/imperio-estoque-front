'use client'
import ProductForm from "@/components/sellingsComponents/ProductForm"
import { act, useEffect, useState } from "react"

const VendasPage = () => {
    const [useActualProducts, setActualProducts] = useState([0])

    const addAnotherForm = () => {
        setActualProducts(actualArrayProducts => [...actualArrayProducts, actualArrayProducts.length])
    }

    const deleteForm = () => {
        setActualProducts(actualArrayProducts => [])
    }

    useEffect(() => {
        console.log(useActualProducts);

    })
    return (
        <>
            <title>Painel de Vendas | Império Sofás</title>
            <h2 className="mt-9 text-3xl text-center">Painel de Vendas</h2>

            <div id="products">
                {useActualProducts.map(id => (
                    <ProductForm addForm={addAnotherForm} deleteForm={deleteForm} key={id} />
                ))}
            </div>

            <div className="flex justify-center">
                <button className="bg-standardGreen p-1 px-5 text-black rounded-full">Criar Venda</button>
            </div>

            {/* dividido em duas abas, criar vendas e visualizar vendas abertas */}
            {/* adiiconar tabela que mostra vendas da semana e items mais vendidos */}
            {/* mostar vendedoras que mais venderam na semana e no mês */}
        </>
    )
}

export default VendasPage 