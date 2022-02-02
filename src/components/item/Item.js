import {useDispatch} from "react-redux";
import {itemActions} from "../../store";
import css from './style.module.css'

const Item = ({item: {id, todo, status}}) => {
    const dispatch = useDispatch();
    return (
        <div className={css.item}>
            <input type="checkbox" value={status} onChange={() => dispatch(itemActions.changeStatus({id}))}/>
            <div className={status ? css.name : ''}>{todo}</div>
            <button onClick={() => dispatch(itemActions.deleteItem({id}))}>Delete</button>
        </div>
    );
};

export {Item};
