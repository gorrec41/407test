import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {priceShoes} from '../../component/contentcard';



interface quantityState {
    quantityPrice:number
}
const initialState:quantityState={
    quantityPrice:0
}
export const quantitySlice= createSlice({
    name: 'quantity',
    initialState,
    reducers: {
        quantityDec(state,action:PayloadAction<number>){
            if(state.quantityPrice>0) {
                state.quantityPrice = state.quantityPrice - priceShoes
                console.log(state.quantityPrice)
            }else {
                state.quantityPrice=0
            }
        },
        quantityInc(state,action:PayloadAction<number>){
            state.quantityPrice=state.quantityPrice+priceShoes
        },
    }
})
export  default quantitySlice.reducer;