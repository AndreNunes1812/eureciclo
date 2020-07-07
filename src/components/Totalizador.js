import React from 'react';

const Totalizador = ({saldo, entrada}) => {

  console.log('props:', saldo)
  return (
    <>
    <h1>Saldo - {saldo}</h1>
    <h1>valores - {entrada}</h1>
    </>
  )
}

export default Totalizador