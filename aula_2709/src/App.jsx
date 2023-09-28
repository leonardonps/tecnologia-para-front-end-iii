import HookMegaSena from './components/HookMegaSena'
import './App.css'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'

function App() {

  return (
    <>
      <HookMegaSena/>
      <EstouConseguindoAprenderReact isEstouIndoBem = {true}/>
      <EstouConseguindoAprenderReact isEstouIndoBem = {false}/>

    </>
  )
}

export default App
