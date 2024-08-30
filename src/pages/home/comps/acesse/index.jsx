import './index.scss'
import { Link } from 'react-router-dom'

export default function Acessar(){
    return(

        <div className=" secao acesse">
        <div className="text">
            <h1>Acesso o site oficial do instituto
        para ficar por dentro de todas 
        nossas informações
            </h1>
        </div>
       <Link className='botaozinho'>Acessar</Link>
        </div>


    )
}