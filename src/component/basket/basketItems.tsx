import {v1} from 'uuid';
import {useState} from 'react';
import {basketQuantity, userSlice} from '../../store/reducers/UserSlice';
import {useAppSelector} from '../../hooks/redux';
import {useDispatch} from 'react-redux';
import {quantitySlice} from '../../store/reducers/QuantitySlice';
import {InputColor} from './inputcolor'
import  {SelectImgColor} from './selectIImgColor'
export type BasketItemTyp={
    id:string,
    basket_shoes:string,
    quantity_shoes:number,
    color_shoes:string,
    price_shoes:number
}


function BasketItems() {
    const dispatch=useDispatch()
    const {decrement}=userSlice.actions;
    const{quantityDec}=quantitySlice.actions
    const decr = ()=>dispatch(decrement(1))
    const priceMinus=()=>{dispatch(quantityDec(quantityPrice))}
    const {count}=useAppSelector(state => state.userReducer)
    const {quantityPrice}=useAppSelector(state => state.quantityReducer)
    let [basketItems,setbasketItems]=useState(basketQuantity)

    function removeShoes(id:string,price:number) {
        setbasketItems(basketItems.filter(f=>f.id!==id))
        decr()
        priceMinus()
    }
    const item = basketItems.map((m:BasketItemTyp)=>{
            return(
                <div key={ v1() } className="product_shoes">
                    <button onClick={()=>removeShoes(m.id,m.price_shoes)}>
                        <svg  className="delete" width="30" xmlns="http://www.w3.org/2000/svg" height="30"
                              viewBox="0 0 96 96">
                            <path
                                d="m24,78c0,4.968 4.029,9 9,9h30c4.968,0 9-4.032 9-9l6-48h-60l6,48zm33-39h6v39h-6v-39zm-12,0h6v39h-6v-39zm-12,0h6v39h-6v-39zm43.5-21h-19.5c0,0-1.344-6-3-6h-12c-1.659,0-3,6-3,6h-19.5c-2.487,0-4.5,2.013-4.5,4.5s0,4.5 0,4.5h66c0,0 0-2.013 0-4.5s-2.016-4.5-4.5-4.5z"/>
                        </svg>
                    </button>
                    <p className="basket_shoes">{m.basket_shoes}</p>
                    <p className="quantity_shoes">{m.quantity_shoes}</p>
                        <SelectImgColor/>
                        <InputColor/>
                    <p className="price_shoes">{m.price_shoes} p</p>
                </div>
            )
    })
    return (
        <>
            <div key={v1()} className="basket_card">
                {item}
            </div>
            <p className="result">Итого:{quantityPrice} р</p>
        </>
    )
}
export default BasketItems