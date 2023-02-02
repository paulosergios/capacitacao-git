import './rodape.css'

function rodape() {
	return(
		<footer>
        <section className="footer__superior">
        	<h3 className="realizacao__footer">Realização</h3>
        	<img src="img/logos.png" alt="logo avasus"/>
        </section>
        
        <section className="footer__inferior">
          <img src="img/lais_logo.png" className="logo__lais" alt="logo lais"/>
          <div className="lista__footer">
            <ul className="footer__lista">
              <li>
                <h3>Links Úteis</h3>
              </li>
              <li className="lista__middle">
                <a href="/">Início</a>
              </li>
              <li className="lista__middle">
                <a href="/sobrenos">Sobre nós</a>
              </li>
              <li className="lista__middle">
                <a href="/cursos">Módulos</a>
              </li>
              <li className="lista__middle">
                <a href="/parceiros">Parceiros</a>
              </li>
              <li className="lista__middle">
                <a href="/transparencia">Transparência</a>
              </li>
            </ul>
          </div>  
          <div className="redes__sociais">
            <h3>Redes Sociais</h3>
            <img src="img/Social.png" className="social" alt="Redes sociais" />
          </div>	
        </section>
        <section className="base">
          <div className="texto__base">
            <p>2022 © LAIS (HUOL). Todos os direitos reservados</p>
          </div>
        </section>
      </footer>
	)
}

export default rodape