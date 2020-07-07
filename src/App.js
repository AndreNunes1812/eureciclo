import React, { useState } from 'react';
import logo from './eureciclo.svg';
import './App.css';

import Totalizador from './components/Totalizador';

const App = () =>  {

  const [entrada, setEntrada] = useState('');
  const [concatenar, setConcatenar] = useState('');
  
  const [saldo, setSaldo] = useState(0);
 
  var valoresUtilizados = [];
  var concatenarValores = ''

  // Definição do Array com a quantidade de litros para preencher o Galão
  const litros = [1, 3, 4.5, 1.5, 3.5 ]; 

  // Funcao criada para ordernar do menor para o maior
  function funcionDeComparacao (elem1, elem2) { return (elem2 - elem1); }

  const handleEsvaziar = (quantidade) => {
    console.log('esvaziar:', quantidade)
    // processo de ordenação
    litros.sort(funcionDeComparacao);

    litros.forEach(element => {
      if (quantidade - element > 0) {
        quantidade = quantidade - element
        valoresUtilizados.push(element)
        setSaldo(quantidade);
        concatenarValores = concatenarValores +  element + ' , ';  
        
      } else {
         setSaldo(quantidade);
      }    
      
    });
    setConcatenar( concatenarValores )
  }

  const handleClickEntrada= (entrada)=> {
    handleEsvaziar(entrada)
  }

  const handleChangeInput = (event)=> {
    const { value } = event.target
    console.log(value);
    setEntrada(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <strong style={{paddingBottom: '100px'}}>Questão numero 2</strong>
        <img src={logo} className="App-logo" alt="logo" />
        <label>Deseja esvaziar?</label>
        <input 
          name="entrada" 
          id="entrada"
          value={entrada}
          onChange={handleChangeInput}
          placeholder="quantidade de Litros"
          type="number"          
        />

        <button onClick={() => handleClickEntrada(entrada)}>Processar</button>

        <Totalizador           
          saldo={saldo}
          entrada={concatenar}
        />
      </header>     
    </div>
  );
}

export default App;
