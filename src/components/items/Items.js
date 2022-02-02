import {useSelector} from "react-redux";

import {Item} from "../item/Item";

const Items = () => {
    const {items} = useSelector(state => state['itemReducer']);

    return (
        <div style={{margin:'50px'}}>
            {items.map(item => <Item key={item.id} item={item}/>)}
        </div>
    );
};

export {Items};
