import './index.scss'
import { Link } from 'react-router-dom'




export default function Chegada(){
    return(
        <div className="secao">

            <div className="texto">
            <h1>administrador</h1>
            <Link className='link'>Sair</Link>
           
            </div>

            <div className="conteudo">
                <div className="top">
                    <h2>Marcação de Chegada </h2>

                    <h1>Feira de Profissões</h1>
                </div>

                <div className="celular">
            
                    <div className="input">
                    <div className="sub">
                    <p>Informe o telefone com DDD:</p>

                    <input  className='pesq' type="text" />
                    <img  className='iconpesq' src="/assets/images/pesquisar.svg" alt="" />
                    </div>
                    <img className='logo' src="/assets/images/logo.png" alt="" />
                     
                    </div>
                  
                </div>
              


                <div className="tb">
                    <div className="nomes">
                        <p>NOME</p>
                        <p>BAIRRO</p>
                        <p>SITUAÇÃO</p>
                    </div>

                    <div className="informacoes">
                        <p>Robson</p>
                        <p>Vilela rua 5</p>
                        <p>Compareceu</p>
                    </div>

                </div>
            </div>


        </div>

        
    )
}