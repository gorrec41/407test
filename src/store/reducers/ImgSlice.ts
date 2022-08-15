import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {v1} from 'uuid';
import img from '../../img/black.jpg'
import img1 from '../../img/bluebig.jpg'
import img2 from '../../img/witbig.jpg'
import img3 from '../../img/yellowbig.jpg'
interface imgState {
    imgBig:string
    idImg:string
}
const initialState:imgState={
    imgBig: img,
    idImg:v1()
}
export const imgSlice= createSlice({
        name:'imgbig',
        initialState,
        reducers:{
            blackBig(state,action:PayloadAction<string>){
                state.imgBig=img
            },
            bluekBig(state,action:PayloadAction<string>){
                state.imgBig=img1
             
            },
            whiteBig(state,action:PayloadAction<string>){
                state.imgBig=img2
             
            },
            yellowBig(state,action:PayloadAction<string>){
                state.imgBig=img3
          
            },
        }
})
export  default imgSlice.reducer;