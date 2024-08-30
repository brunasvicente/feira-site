import './index.scss'
import { Link } from 'react-router-dom'

export default function Parceiros(){
    return(

        <div className="secao parceiros ">
            <div className="titulo"><h1>Parceiros</h1></div>

            <div className="parceiros">

            <div className="parceiro ">
                <img src="/assets/images/empfeminino.png" alt="empfeminino" />
                <img src="/assets/images/danimatos2.png" alt="danimatos" />
                <img src="/assets/images/cuja3.png" alt="cuja" />
                <img src="/assets/images/opcenter4.png" alt="opencenter" />
            </div>
            <div className="parceiro ">
                <img src="/assets/images/italo5.png" alt="italo" />
                <img src="/assets/images/uni6.png" alt="unisa" />
                <img src="/assets/images/stb7.png" alt="stb" />


            </div>
            </div>
        </div>
    )
}
