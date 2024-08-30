import "./index.scss"

export function Feira(props){
return(
<div className="container-feira-profissoes">

<div className="faixa"></div>
<div className="cabecalho"> <h1 className="o-que-tera">Feira das Profissões</h1></div>
<div className="carrocel">
    
    <div className="rolagem"><img src="https://s3-alpha-sig.figma.com/img/8df4/1c8b/d0835bb6f985a59f4ae6463ed0d05647?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pGTh8c8syPlGVoo~Yn00gU0PwO2~H7iEde9j6iLwvlotV4BmJ1PM-t6xjSK7jt-d8wBUUQyG3VA7WCapX~ggV6P8wwzPM1OmBpfkyJ62A7EmVx~xM~5VjJ9ClrSC5jwlfRVFnW8GzwA2UJc9WkQGdW7yXqkAqTBdcDMKXbexclogek04qlxBNfjhjO023pJtJ~gMAhPe6IjFtpdY4FHT8OTibuAdWztqsV04wabQjN2LoR2gC4fcVMUMsJqHXkfPPW7UjRh97GKkpHKsjmiA1hv5NUzwFeBwQknegniDf0rpNi6cB7qv-VednN3YBK6lv1goLAHAOmQuWR-SV1ISJw__" alt="" /></div>
    <div className="informacoes">
    <h2>O que terá no evento?</h2>
    <div className="info-paragrafo">
    <p>O evento contará com a presença de profissionais de diversas áreas, oficinas práticas e stands interativos, oferecendo um espaço único para esclarecer dúvidas, obter orientações e conhecer o
    desenvolvimento dos nossos alunos!</p> 
    </div>
   
    </div>
</div>

<div className="central-rolagem">
     <button></button>
     <button></button>
     <button></button>
</div>
<div className="faixa"></div>
</div>
)
}