import { useEffect, useState } from "react"

const lista = [
    {id: '1', value: 'Monitor'},
    {id: '2', value: 'Teclado'},
    {id: '3', value: 'Celular'},
]

export default function MeuFiltro() {

    const [produtos, setProdutos] = useState(lista)
    const [pesquisa, setPesquisa] = useState('')

    useEffect (
        () => {
            if(pesquisa) {
                const novaLista = lista.filter( (item) => {
                return item.value.toLowerCase().includes(pesquisa.toLowerCase())
                } )
                setProdutos(novaLista)
            }else {
                setProdutos(lista)
            }   
        }
    , [pesquisa])

    return (
        <div>
            <h3 className="atividade">Efeitos Colaterais</h3>
            <input 
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="pesquise aqui">
            </input>
            {produtos.map((item) => {
                return (
                    <div key = {item.id}>
                        <h4 className="item">{item.value}</h4>
                    </div>
                )
            })}
        </div>
    )
}