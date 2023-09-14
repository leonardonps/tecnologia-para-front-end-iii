import React from 'react';

const Subtracao = (props) => {
  return (
    <h1>O resultado de {props.num1} - {props.num2}: {props.num1 - props.num2}</h1>
  );
}

export default Subtracao;