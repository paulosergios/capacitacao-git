import './cabecalho.css'

function cabecalho() {
    return (
    	<section className="superior">
        <img src="img/avasus.png" className="avasus" alt="avasuslogo"/>
        <ul className="lista__superior">
          <li className="lista__inicio">
            <a href="/">Início</a>
          </li>
          <li className="lista__posterior">
            <a href="/sobrenos">Sobre Nós</a>
          </li>
          <li className="lista__posterior">
            <a href="/cursos">Cursos</a>
          </li>
          <li className="lista__posterior">
            <a href="/parceiros">Parceiros</a>
          </li>
          <li className="lista__posterior">
            <a href="/transparencia">Transparência</a>
          </li>
          <li className="lista__posterior">
            <a href="/">Contato</a>
          </li>
        </ul>
        <div>
          <input type="text" id="textobuscar" placeholder="Buscar por um assunto..." />
        </div>
        <button className="botao__entrar botao__superior"><h3 className="texto__botao1">Entrar</h3></button>
        <button className="botao__cadastrar botao__superior"><h3 className="texto__botao2">Cadastrar</h3></button>
      </section>
    )
}

export default cabecalho