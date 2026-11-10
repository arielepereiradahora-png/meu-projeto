
import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h2>React + Vite</h2>
        <span>Projeto acadêmico</span>
      </header>

      <main>
        <section className="hero">
          <span className="tag">ATIVIDADE PRÁTICA</span>

          <h1>
            Meu primeiro projeto
            <br />
            com <span>React + Vite</span>
          </h1>

          <p>
            Conhecendo as ferramentas utilizadas no
            desenvolvimento de aplicações web modernas.
          </p>

          <a href="#sobre" className="button">
            Conhecer o projeto
          </a>
        </section>

        <section id="sobre" className="content">
          <h2>Sobre o projeto</h2>
          <p>
            Este projeto foi desenvolvido utilizando React
            e Vite, com o objetivo de compreender a estrutura
            de uma aplicação web, seus principais arquivos
            e o processo de desenvolvimento e build.
          </p>

          <div className="cards">
            <article className="card">
              <h3>React</h3>
              <p>
                Biblioteca JavaScript utilizada para criar
                interfaces e componentes reutilizáveis.
              </p>
            </article>

            <article className="card">
              <h3>Vite</h3>
              <p>
                Ferramenta que facilita a criação e execução
                de projetos durante o desenvolvimento.
              </p>
            </article>

            <article className="card">
              <h3>Build</h3>
              <p>
                Processo que gera os arquivos finais
                preparados para produção.
              </p>
            </article>
          </div>
        </section>

        <section className="commands">
          <h2>Comandos utilizados</h2>

          <div className="command">
            <code>npm run dev</code>
            <p>Inicia o servidor de desenvolvimento.</p>
          </div>

          <div className="command">
            <code>npm run build</code>
            <p>Gera a versão de produção do projeto.</p>
          </div>
        </section>

        <section className="files">
          <h2>Principais arquivos</h2>
          <ul>
            <li><strong>package.json:</strong> dependências e scripts.</li>
            <li><strong>index.html:</strong> página HTML principal.</li>
            <li><strong>src/main.jsx:</strong> inicialização do React.</li>
            <li><strong>src/App.jsx:</strong> componente principal.</li>
            <li><strong>src/App.css:</strong> estilos da aplicação.</li>
            <li><strong>vite.config.js:</strong> configuração do Vite.</li>
            <li><strong>dist:</strong> arquivos gerados pelo build.</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>Projeto acadêmico - React + Vite</p>
      </footer>
    </div>
  )
}

export default App
