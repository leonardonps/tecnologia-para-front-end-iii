import { useState } from 'react'
import './App.css'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Adicao num1 = {5} num2 = {10}/>
      <Subtracao num1 = {5} num2 = {10}/>
      <Multiplicacao num1 = {5} num2 = {10}/>
      <Divisao num1 = {5} num2 = {10}/>
      <PrecisoEstudar tecnologia = "Javascript"/>
    </>
  )
}

export default App
