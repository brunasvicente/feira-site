import './index.scss';

export default function Faq() {
    return(
        <div className='pagina-faq'>
            <h1>FAQ</h1>
            <hr />

            <details className='perguntas'>
                <summary className='seta' onClick={abrir}>
                    <img src="seta.png" id='setaFaq'/>
                </summary>

                <section>
                    <details>
                        <summary>Onde está localizado?</summary>
                        <p>O evento ocorrera na localização: <br /> Av. Cel. Octaviano de Freitas Costas 463 <br /> JD Veleiros - São Paulo - SP</p>
                    </details>
                    <hr />

                    <details>
                        <summary>Como possso cursar no Instituto?</summary>
                        <p>Você deve entrar em nosso aplicativo <br /> que será disponibilizado no final do ano <br /> para realizar a sua inscrição de acordo <br /> com o curso de interesse e seguir as <br /> devidas orientações</p>
                    </details>
                    <hr />

                    <details>
                        <summary>Quem pode ir à feira?</summary>
                        <p>Qualquer pessoa pode vir a feira, a sua <br /> presença é mais que bem vinda! Mas <br /> não se esqueça de concluir seu cadastro <br /> aqui em nosso site</p>
                    </details>
                    <hr />

                    <details>
                        <summary>Quem fez os projetos?</summary>
                        <p>Todos os projetos serão desenvolvidos <br /> por nossos alunos, você irá se entreter <br /> numa aventura de informação e <br /> conhecimento</p>
                    </details>
                    <hr />

                    <details>
                        <summary>O evento é gratuito?</summary>
                        <p>Sim, o evento é gratuito; <br /> disponibilizamos todas as atrações e <br /> intreções com inúmeras novidades</p>
                    </details>
                    <hr />

                    <details>
                        <summary>Sobre a alimentação</summary>
                        <p>Conheça nossa padaria, lá temos <br /> inúmeras variedades de doces e pães <br /> de dar água na boca. Caso bater aquela <br /> fome, já sabe para pnde ir</p>
                    </details>
                    <hr />

                    <details>
                        <summary>Como validar meu ingresso?</summary>
                        <p>Assim que chegar no Instituto fale que <br /> já fez o cadastro e informe algumas informações; após isso, siga as <br /> orientações dadas pelos atendentes</p>
                    </details>
                    <hr />

                    <details>
                        <summary>Qual o objetivo da feira?</summary>
                        <p>O objetivo de uma feira de profissões é conectar estudantes <br /> e profissionais em início de carreira com diversas áreas de <br /> atuação. O evento permite que os participantes explorem <br /> diferentes profissões, conheçam o mercado de trabalho e <br /> recebam orientações sobre as melhores opções de profissões, conheçam o mercado de trabalho e <br /> recebem orientações sobre as melhores opções para seu <br /> futuro. A feira facilita o contato direto com especialistas, <br /> oferece palestras  e workshops, e ajuda a esclarecer dúvidas <br /> sobre carreiras  qualificações  necessárias, auxiliando na <br /> profissional de forma mais informada e prática</p>
                    </details>
                    <hr />
                </section>
            </details>
        </div>
    )
}