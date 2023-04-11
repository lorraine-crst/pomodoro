import style from "./lista.module.scss";
import Item from "./item";
import {iTarefa} from '../../types/tarefa';

function Lista({tarefas}: {tarefas: Array<iTarefa>} ) {
    return (
        <aside className={style.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        {...item}
                    />
                ))}
            </ul>

        </aside>
    )
}

export default Lista;