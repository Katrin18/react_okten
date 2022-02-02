import {createSlice} from "@reduxjs/toolkit";


const itemSlice = createSlice({
    name: 'itemSlice',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push({
                id: new Date().getTime(),
                ...action.payload.data
            })
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter(item => item.id !==action.payload.id)
        },
        changeStatus:(state,action)=>{
            const item=state.items.find(item=>item.id===action.payload.id)
            item.status= !item.status
        }
    }
})

const itemReducer = itemSlice.reducer;
export const {addItem, deleteItem,changeStatus} = itemSlice.actions;

export default itemReducer

export const itemActions = {
    addItem, deleteItem,changeStatus
}
