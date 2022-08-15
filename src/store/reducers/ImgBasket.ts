import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import img from '../../img/black.jpg'
import img1 from '../../img/bluebig.jpg'
import img2 from '../../img/witbig.jpg'
import img3 from '../../img/yellowbig.jpg'


interface imgStateBascet {
    colorShoes:string;
    colorInp:string;
}
const initialState:imgStateBascet={
    colorShoes: img,
    colorInp:''
}
export const imgSliceBasket= createSlice({
    name:'imgbasket',
    initialState,
    reducers:{
        black(state,action:PayloadAction<string>){
            state.colorShoes=img
            console.log('black');
            
        },
        blue(state,action:PayloadAction<string>){
            state.colorShoes=img1 
            console.log('black1');
        },
        white(state,action:PayloadAction<string>){
            state.colorShoes=img2
            console.log('black2');
        },
        yellow(state,action:PayloadAction<string>){
            state.colorShoes=img3   
            console.log('black3');       
        },
    }
})
export  default imgSliceBasket.reducer;