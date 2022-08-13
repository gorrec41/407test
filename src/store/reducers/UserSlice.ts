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
    name:'shoes',
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            ++state.count
                    const idkey: string = String((new Date().getTime()) * Math.floor((Math.random() * 107700) + 1))
                    const shoes: BasketItemTyp = {
                        id: idkey,
                        basket_shoes: 'Кроссовки',
                        quantity_shoes: 1,
                        color_shoes: 'blak',
                        price_shoes: 12000
                    }
                    basketQuantity.push(shoes)
        },
        decrement(state, action: PayloadAction<number>) {
            if (state.count > 0) {
                --state.count
                basketQuantity.splice(0,1)
            } else {
                state.count = 0
                if(basketQuantity.length>0){
                    basketQuantity.splice(0,1)
                }
            }
            console.log(basketQuantity)
        },
        addbascets(state, action: PayloadAction<number>) {
            state.quantity = state.count


        },
          }
})
export  default  userSlice.reducer;