import './index.scss'
import { Link } from 'react-router-dom'

export default function UserChegada() {
    return (
        <div className="secao1">

            <div className='onda'>
                <img className='fundo' src="assets/images/Group14.png" alt="" />
            </div>

            <header>
                <img className='logo' src="/assets/images/logofrei_fundo.svg" alt="" />
                <h1>ADMINISTRADOR</h1>
                <h1>|</h1>
                <h1>Instituto Social N.S. de Fátima</h1>
            </header>

            <main>
                <section className='titulo'>
                    <h1>Informações do Usuário</h1>
                    <hr />
                </section>

                <div className='informacoes'>
                    <h2>Usuário:</h2>
                    <input className='user' type="text" placeholder='00 00000-0000'/>
                    <img src="assets/images/user.png" alt="" />
                    <input type="text" placeholder='Nome:'/>
                    <input type="text" placeholder='Tel: 00 00000-0000'/>
                    <input type="text" placeholder='CEP: 00000-000'/>
                    <input type="text" placeholder='Bairro: '/>
                    <input type="text" placeholder='Data de Nascimento: 00/00/0000'/>
                    
                    <div className='qrcode'>
                        <div className='codigo'>
                            <h2>Insira o código do QRcode:</h2>
                            <input className='code' type="text" />
                        </div>

                        <div className='botao'>CONCLUIR</div>
                    </div>
                </div>
            </main>
        </div>


    )
}