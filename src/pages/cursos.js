import React from 'react'

import Cabecalho from '../componentes/cabecalho';
import Rodape from '../componentes/rodape';
import Modulos from '../componentes/modulos';

function cursos() {
  return (
      <div>
        <Cabecalho />
        <Modulos /> 
        <Rodape />
      </div>
  );
}

export default cursos;
