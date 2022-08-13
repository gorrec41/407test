import {v1} from 'uuid';
import {useState} from 'react';
import { basketQuantity} from '../../store/reducers/UserSlice';
import {useAppSelector} from '../../hooks/redux';

export let resault=0

export type BasketItemTyp={
    id:string,
    basket_shoes:string,
    quantity_shoes:number,
    color_shoes:string,
    price_shoes:number
}

function BasketItems() {
    const {count}=useAppSelector(state => state.userReducer)
    let [basketItems,setbasketItems]=useState(basketQuantity)
    addresult()
    function addresult(){
        basketQuantity.map((f:BasketItemTyp)=>{
            pricePlus(f.price_shoes)})
        return
    }
    function priceMinus(price:number){
        resault=resault-price
    }
    function pricePlus(price:number){
        resault=resault+price
    }
    function removeShoes(id:string,price:number) {
        setbasketItems(basketItems.filter(f=>f.id!==id))
        basketQuantity.splice(1,1)
        basketQuantity.map((f:BasketItemTyp)=>{
        priceMinus(f.price_shoes)})
    }
    const item = basketItems.map((m:BasketItemTyp)=>{
        for(let i=0;i<count;i++){
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
                    <p className="color_shoes">{m.color_shoes}</p>
                    <p className="price_shoes">{m.price_shoes} p</p>
                </div>
            )
        }
    })
    return (
        <>
            <div key={v1()} className="basket_card">
                {item}
            </div>
            <p className="result">Итого:{resault} р</p>
        </>
    )
}
export default BasketItems