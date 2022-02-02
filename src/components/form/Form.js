import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {itemActions} from "../../store";

const Form = () => {
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(itemActions.addItem({data}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register('todo')}/>
            <button>Save</button>
        </form>
    );
};

export {Form};
