import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import logo from './eureciclo.svg';
import './App.css';

import Totalizador from './components/Totalizador';

const App = () =>  {

  const [entrada, setEntrada] = useState('');
  const [concatenar, setConcatenar] = useState('');
  
  const [saldo, setSaldo] = useState(0);
 
  var valoresUtilizados = [];
  var concatenarValores = '';
  var elemento = '';

  // Definição do Array com a quantidade de litros para preencher o Galão
  const litros = [1, 3, 4.5, 1.5, 3.5 ]; 

  // Funcao criada para ordernar do menor para o maior
  function funcionDeComparacao (elem1, elem2) { return (elem2 - elem1); }

  const handleEsvaziar = (quantidade) => {    
    // processo de ordenação
    litros.sort(funcionDeComparacao);

    litros.forEach(element => {
    
      if (quantidade - element >= 0) {
        quantidade = quantidade - element
        valoresUtilizados.push(element)
        setSaldo(quantidade);
        elemento = element
        concatenarValores = concatenarValores +  elemento + ' , ';  
    
      } else {
        setSaldo(quantidade);
      }    
      
    });  
    setConcatenar( concatenarValores )
  }

  const handleClickNovo = () => {
    setConcatenar('');
    setEntrada('');
    setSaldo(0);
  }

  const handleClickEntrada= (entrada)=> {
    if (entrada <= 0 ) {
      return false

    }
    handleEsvaziar(entrada)
  }

  const handleChangeInput = (event)=> {
    const { value } = event.target    
    setEntrada(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <strong style={{paddingBottom: '100px'}}>Questão numero 2 - [1, 3, 4.5, 1.5, 3.5 ]</strong>
        <img src={logo} className="App-logo" alt="logo" />
        <label>Deseja esvaziar ?</label>
        <input 
          name="entrada" 
          id="entrada"
          value={entrada}
          onChange={handleChangeInput}
          placeholder="quantidade de Litros"
          type="number"          
        />

        <Button onClick={() => handleClickEntrada(entrada)}>Processar</Button>
        <Button onClick={handleClickNovo}>Novo</Button>
        

        <Totalizador           
          saldo={saldo}
          entrada={concatenar}
        />
      </header>     
    </div>
  );
}

export default App;
