import './index.scss';
import Parceiros from './comps/parceiros';
import Acessar from './comps/acesse';


export default function Home() {
  return (
    <div className="pagina-home">
      Feira

      <div className="parceiros"><Parceiros/></div>
      <div className="acessar"><Acessar/></div>
    </div>
  );
}

