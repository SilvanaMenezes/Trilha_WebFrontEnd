import { useEffect, useState } from "react"

const tarefas = [
    {id: '1', title: 'minha primeira tarefa'}    
]

export default function MeusDados() {

    const [tarefas, setTarefas] = useState([])

    useEffect(() => {

        async function buscarDados() {
            const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
            const resultadoFinal = await resultado.json()
            return resultadoFinal
        }

        buscarDados().then(res => setTarefas(res))

    }, [])


    return (
        <div>
            <h3 className="atividade">Buscando Dados</h3>
            <ol>
                {tarefas.map((tarefa) => {
                    return (
                        <div>
                            <li key = {tarefa.id}>
                                {tarefa.title}
                                {tarefa.completed ? <strong> - Concluída</strong> : null}
                            </li>
                        </div>
                    )
                })}
            </ol>
        </div>
    )
}