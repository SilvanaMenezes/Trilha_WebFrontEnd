import { useState } from "react"

export default function MeuContador() {

    console.log('renderizando o componente inteiro a cada click.')

    const [contador, setContador] = useState(0)

    function aumentar() {
        setContador(contador + 1)  
    }

    function diminuir() {
        setContador(contador - 1)
    }

    if(contador > 5) {
        return (
            <div>
                <h3 className="atividade">Valor muito alto!</h3>
                <button onClick={aumentar}>aumentar</button>
                <button onClick={diminuir}>diminuir</button>
            </div>
        )
    }

    return (
        <div>
            <h3 className="atividade">Contando: {contador}</h3>
            <button onClick={aumentar}>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
        </div>
    )    
}  