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

    </div>


  )
}