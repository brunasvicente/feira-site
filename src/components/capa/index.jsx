import "./index.scss"
import { Link } from "react-router-dom"

export default function Capa() {
  return (
    <div className="pagina-capa">



      <header>
        <nav className="content">
          <img className="logo" src="/assets/images/logofrei_fundo.svg" alt="" />
          <ul>
            <div className="navegacao-links">
              <li> <Link> Inicio </Link> </li>
              <li> <Link> Sobre </Link> </li>
              <li> <Link className="log"> Fazer login </Link> </li>
            </div>
          </ul>
        </nav>
      </header>

<div className="secao">
    <div className="enunciadoFeira">
      <div className="feiraTitulo">
    <h1>4ª</h1> <h2>Feira</h2> 
      </div>
    <h2>de Profissões</h2>

    <h3>O FUTURO ESTA Á BORDO</h3>
    <h4>21 DE SETEMBRO DE 2024</h4>


    <button>Inscreva-se</button>

    </div>

</div>

    </div>


  )
}