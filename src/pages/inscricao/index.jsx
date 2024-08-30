import { useState } from 'react';
import './index.scss';

import { withMask } from 'use-mask-input';
import Capa from '../../components/capa';


export default function Inscricao() {

    const [nome, setNome] = useState("");
    const [cep, setCep] = useState(0);
    const [telefone, setTelefone] = useState(0);
    const [data_nascimento, setData_nascimento] = useState(0);

    function Inserir_nome(e){
        const nome = e.target.value;
        setNome(nome)
    }
    function Inserir_cep(e){
        const cep = e.target.value;
        setCep(cep)
    }
    function Inserir_telefone(e){
        const telefone = e.target.value;
        setTelefone(telefone)
    }
    function Inserir_dtnascimento(e){
        const dataN = e.target.value;
        setData_nascimento(dataN)
    }
    return(
        <div className='container'>
        
         <div className='h1z'>
        <h1>INSCRIÇÃO</h1>
        </div>

        <div className='twos'>
        <div className='input1'>
            <h3>informe seu nome</h3>
            <input onChange={Inserir_nome} placeholder='Nome...' type="text" />
        </div>
        <div className='input2'>
            <h3>CEP</h3>
            <input onChange={Inserir_cep} placeholder='00000-000' type="text" ref={withMask('99999-999')} />
        </div>
        </div>
        <div className='twox'>
        <div className='input3'>
            <h3>Informe seu telefone</h3>
            <input onChange={Inserir_telefone} placeholder='00 00000-0000' ref={withMask('99 99999-9999')} type="text"/>
        </div>
        <div className='input4'>
            <h3>Data de Nascimento</h3>
            <input onChange={Inserir_dtnascimento} placeholder='00/00/0000' ref={withMask('99/99/9999')}type="text"/>
        </div>

        </div>

        <div className='insc'>
            <a href="">Inscreva-se</a> 

        </div>
    </div>
    );
}