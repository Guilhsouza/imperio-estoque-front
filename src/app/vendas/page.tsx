const VendasPage = () => {
    return (
        <>
            <title>Painel de Vendas | Império Sofás</title>
            <h2 className="mt-9 text-3xl text-center">Painel de Vendas</h2>

            <div className="flex my-9 justify-center">

                <form action="post" className="flex justify-center p-4 mx-16 gap-12 border rounded-full">
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
                    <button className="bg-blue-800 p-4 rounded-full text-2xl max-h-[50px] flex items-center">+</button>
                    <button className="bg-red-800 rounded-full p-4 text-2xl max-h-[50px] flex items-center">x</button>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-standardGreen p-1 px-5 text-black rounded-full">Criar Venda</button>
            </div>

            {/* fazer um formulário onde defina tipo do produto, produto específico e quantidade do produto,
            onde consiga acrescentar produtos infinitos, após isto um único botão de criar venda */}
            {/* dividido em duas abas, criar vendas e visualizar vendas abertas */}
            {/* adiiconar tabela que mostra vendas da semana e items mais vendidos */}
            {/* mostar vendedoras que mais venderam na semana e no mês */}
        </>
    )
}

export default VendasPage 