import React from 'react'

import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';
import API_P from '../componentes/api_parceiros';

function parceiros() {
  return (
      <div>
        <Cabecalho />
        <API_P />
        <Rodape />
      </div>
  );
}

export default parceiros;
