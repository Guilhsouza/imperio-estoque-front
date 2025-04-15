'use client'
import ProductForm from "@/components/sellingsComponents/ProductForm"
import { useState } from "react"

const VendasPage = () => {
    const [useActualProducts, setActualProducts] = useState([0])

    const addAnotherForm = () => {
        const lastId = useActualProducts[useActualProducts.length - 1] ?? 0;
        const newId = lastId + 1;

        setActualProducts([...useActualProducts, newId]);
    }

    const deleteForm = (idToRemove: number) => {
        setActualProducts(actualArrayProducts => actualArrayProducts.filter(id => id !== idToRemove))
    }

    return (
        <>
            <title>Painel de Vendas | Império Sofás</title>
            <h2 className="mt-9 text-3xl text-center">Painel de Vendas</h2>

            <div className="flex w-full justify-center mt-12 gap-4">
                <button className="border-b-2">Criar Vendas</button>
                <button className="hover:border-b-2">Verificar Vendas</button>
            </div>
            <div id="products">
                {useActualProducts.map(id => (
                    <ProductForm addForm={addAnotherForm} deleteForm={() => deleteForm(id)} key={id} />
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