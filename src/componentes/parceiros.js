import './parceiros.css'

function parceiros(){
	return(

	 <section className="parceiros">
        <div>
            <h3 className="titulo__vermelho">Parceiros</h3>
        </div>
        <div className="lista__inferior">	
          <ul className="remove__ponto">
            <li>
              <h3>Governo do RN</h3>
            </li>
            <li className="descricao__lista__inf">
              <a>Governo do Estado do Rio Grande do Norte.</a>
            </li>
          </ul>
          <ul className="remove__ponto">
            <li>
              <h3>SESAP</h3>
            </li>
            <li className="descricao__lista__inf">
              <a>Secretaria de Saúde Pública do Estado do Rio Grande do Norte.</a>
            </li>
          </ul>
          <ul className="remove__ponto">
            <li>
              <h3>UFRN</h3>
            </li>	
            <li className="descricao__lista__inf">
              <a>Universidade Federal do Rio Grande do Norte.</a>
            </li>
          </ul>
          <ul className="remove__ponto">
            <li>
              <h3>HUOL</h3>
            </li>	
            <li className="descricao__lista__inf">
              <a>Hospital Onofre Lopes: Hospital Universitário da UFRN (Universidade Federal do Rio Grande do Norte).</a>
            </li>
          </ul>
        </div>	
     </section>

	)
}

export default parceiros