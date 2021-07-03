import React from 'react';
import ReactDOM from 'react-dom';
import Teste from './components/Teste';
import Segundo from './components/Segundo';
import Card from './components/Card'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <div className="grid">
      <Teste/>
      <Segundo/>
      <Card titulo="Bolovo" descricao="Bolinho de Carne com Ovo" img="imgs/bolovo.jpg" />
      <Card titulo="Baré Cola" descricao="Refri melhor que Coca-Cola" img="imgs/bare.jpg" />
      <Card titulo="Corote" descricao="Corote" img="imgs/corote.jpg" />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

