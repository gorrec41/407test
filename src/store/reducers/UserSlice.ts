import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {BasketItemTyp} from '../../component/basket/basketItems';

interface ShoesState{
    count:number;
    quantity:number;
 }

const initialState:ShoesState={
    count:0,
    quantity:0,
 }

export let basketQuantity:Array<BasketItemTyp>=[]

export const userSlice= createSlice({
    name:'quantity',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload;
            if (state.count >= 1) {
                basketQuantity.map((m: BasketItemTyp) => {
                    const mb = basketQuantity.length
                    basketQuantity.slice(mb)
                })
                for (let i = 0; i < state.count; i++) {
                    const idkey: string = String((new Date().getTime()) * Math.floor((Math.random() * 107700) + 1))
                    const shoes: BasketItemTyp = {
                        id: idkey,
                        basket_shoes: 'Кроссовки',
                        quantity_shoes: 1,
                        color_shoes: 'blak',
                        price_shoes: 12000
                    }
                    basketQuantity.push(shoes)
                }
            }
        },
        decrement(state, action: PayloadAction<number>) {
            if (state.count > 0) {
                state.count -= action.payload;
                state.quantity = state.count
            } else {
                state.count = 0
                state.quantity = state.count
            }
        },
        addbascets(state, action: PayloadAction<number>) {
            state.quantity = state.count
        },
          }
})
export  default  userSlice.reducer;