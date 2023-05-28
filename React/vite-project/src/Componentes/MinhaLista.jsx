    const lista = [
        {id: '1', value: 'Frutas'},
        {id: '2', value: 'Legumes'},
        {id: '3', value: 'Proteinas'},
    ]

export default function MinhaLista() {

    return lista.map( (item) => {
        return (
            <div key = {item.id}>
                <h4 className="item">{item.value}</h4>
            </div>
        )
    } )
}