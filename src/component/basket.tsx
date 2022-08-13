import BasketItems, {BasketItemTyp} from './basket/basketItems';
import {Link} from "react-router-dom";

export type basketItemsType={
    basket_shoes:string,
    quantity_shoes:number,
    color_shoes:string,
    price_shoes:number
}

function Basket() {
    return (
        <div className="basket">
            <div className="header_card">
                <Link to='/' className="exitcard">к выбору товара</Link>
                <h1 className="header_product">Корзина</h1>
            </div>
                     <BasketItems/>
            <button className="payment">Оплатить товар</button>
        </div>
    )
}
export default Basket