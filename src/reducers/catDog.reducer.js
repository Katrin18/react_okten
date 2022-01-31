import {actions} from "../constants/actions";

export const catDogReducer = (state,action) => {
    switch (action.type){
        case actions.cat:
            return {...state, cats:[...state.cats, action.payload.cat]}

        case actions.dog:
            return {...state, dogs:[...state.dogs, action.payload.dog]}

        case actions.del_cat:
            return {...state, cats:state.cats.filter(cat => cat.id!==action.payload.id)}

        case actions.del_dog:
            return {...state, dogs:state.dogs.filter(dog => dog.id!==action.payload.id)}

        default:
            return state
    }
}
