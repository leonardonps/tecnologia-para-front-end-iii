import React from 'react'

const EstouConseguindoAprenderReact = (props) => {
  const isEstouIndoBem = props.isEstouIndoBem;
  
  return (
    <div>
        { isEstouIndoBem ? <h1> Estou indo bem... </h1> : <h1>Preciso estudar mais</h1>}
    </div>
  )
}

export default EstouConseguindoAprenderReact