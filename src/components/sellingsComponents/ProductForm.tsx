import { MouseEventHandler } from "react"

interface ProdcutForm {
    addForm: MouseEventHandler,
    deleteForm: MouseEventHandler
}

const ProductForm: React.FC<ProdcutForm> = ({ addForm, deleteForm }) => {

    return (
        <div className="flex my-9 justify-center items-center">

            <form action="post" className="flex justify-center p-4 mx-16 gap-12 border border-transparent rounded-full bg-neutral-800">
                <div className="text-black">
                    <label htmlFor="productType">Tipo de Produto: </label>
                    <select className="p-1 rounded-full min-w-[220px]" id="productType">
                        <option value="sofa">Sofás</option>
                        <option value="sofa">Camas e Colchões</option>
                        <option value="sofa">Sala</option>
                        <option value="sofa">Cozinha</option>
                    </select>
                </div>

                <div className="text-black">
                    <label htmlFor="specifiedProduct">Produto Específico: </label>
                    <select className="p-1 rounded-full min-w-[220px]" id="specifiedProduct">
                        <option value="teste">teste 1</option>
                        <option value="teste">cama tal</option>
                        <option value="teste">cama x</option>
                        <option value="teste">cama t3</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="quantity">Quantidade: </label>
                    <input type="number" id="quantity" className="text-black p-1 text-center rounded-full max-w-12" defaultValue={1} />
                </div>

            </form>

            <div className="flex flex-row gap-3">
                <button className="bg-blue-700 px-4 py-2 rounded-full text-2xl flex items-center" onClick={addForm}>+</button>
                <button className="bg-red-700 px-4 py-2 rounded-full text-2xl flex items-center" onClick={deleteForm}>×</button>
            </div>
        </div>
    )
}

export default ProductForm