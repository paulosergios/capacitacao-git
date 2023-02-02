import React from 'react';

import Blocosup from '../componentes/blocosup';
import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';
import Parceiros from '../componentes/parceiros';
import API from '../componentes/api';

function Home() {
  return (
      <div>
        <Cabecalho />
        <Blocosup />
        <API />
        <Parceiros />
        <Rodape />
      </div>
  );
}

export default Home;
