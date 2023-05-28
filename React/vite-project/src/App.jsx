import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MeuComponente from './Componentes/MeuComponente'
import MeuBotao from './Componentes/MeuBotao'
import MeuContador from './Componentes/MeuContador'
import MinhaLista from './Componentes/MinhaLista'
import MeuFiltro from './Componentes/MeuFiltro'
import MeusDados from './Componentes/MeusDados'

export default function App() {

  return (
    
    <div className='container'>
      <h1 className='titulo'>Olá mundo, React!</h1>
       
      <h2 className='subtitulo'>Meu Componente</h2>
      <MeuComponente/>

      <h2 className='subtitulo'>Meu Botão</h2>
      <MeuBotao conteudo = "primeiro clique" />
      <MeuBotao conteudo = "segundo clique" />

      <h2 className='subtitulo'>Meu Contador</h2>
      <MeuContador/>

      <h2 className='subtitulo'>MinhaLista</h2>
      <MinhaLista/> 

      <h2 className='subtitulo'>Meu Filtro</h2>
      <MeuFiltro/>

      <h2 className='subtitulo'>Meus Dados</h2>
      <MeusDados/>
    </div>
  )
}





