import React from 'react';
import Botao from '../botão';
import style from './formulario.module.scss'

class Formulario extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="terefa">
                        Adicione um novo estudo
                    </label>
                    <input type="text" name='tarefa' id='tarefa' placeholder='O que voce quer estudar?' required />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="tempo">
                        Tempo
                    </label>
                    <input type="time" step={1} name='tempo' id='tempo' min='00:00:00' max='01:30:00' required />
                    <Botao>
                        Adicionar
                    </Botao>
                </div>
            </form>
        )

    }
}

export default Formulario;