
import img2 from '../../src/img/white.jpg'
import img3 from '../../src/img/blue.jpg'
import img4 from '../../src/img/yellow.jpg'
import {useAppSelector} from '../hooks/redux';
import {userSlice} from '../store/reducers/UserSlice';
import {useDispatch} from 'react-redux';
import {descriptionType} from './card';
import {Link} from "react-router-dom";
import  {imgSlice} from '../store/reducers/ImgSlice';
import {quantitySlice} from '../store/reducers/QuantitySlice'
export const priceShoes=12000
function Contentcard(description:descriptionType){

    const {count}=useAppSelector(state => state.userReducer)
    const {quantity}=useAppSelector(state => state.userReducer)
    const {imgBig}=useAppSelector(state=>state.imgReducer)
    const {quantityPrice}=useAppSelector(state =>state.quantityReducer )
    const {increment}=userSlice.actions;
    const {decrement}=userSlice.actions;
    const {addbascets}=userSlice.actions;
    const{bluekBig}=imgSlice.actions
    const{whiteBig}=imgSlice.actions
    const{yellowBig}=imgSlice.actions
    const{blackBig}=imgSlice.actions
    const{quantityInc}=quantitySlice.actions
    const{quantityDec}=quantitySlice.actions
    const dispatch=useDispatch()

    const decr = ()=>dispatch(decrement(1))
    const incr = ()=>dispatch(increment(1))
    const addbasket=()=>{dispatch(addbascets(quantity))}
    const white=()=>{dispatch(whiteBig(imgBig))}
    const blue=()=>{dispatch(bluekBig(imgBig))}
    const yellow=()=>{dispatch(yellowBig(imgBig))}
    const black=()=>{dispatch(blackBig(imgBig))}
    const pricePluse=()=>{dispatch(quantityInc(quantityPrice))}
    const priceMinus=()=>{dispatch(quantityDec(quantityPrice))}
    const dec=()=>{
        decr()
        priceMinus()
    }
    const inc=()=>{
        incr()
        pricePluse()
    }
    return(
        <div className="content_card">
            <div className="shoes_images">
                <div className="big_image">
                    <img className='images' src={imgBig} alt="white shoes"/>
                </div>
                <div className="wrap_small_images" >
                    <div className="white_img" >
                        <img src={img2} alt="white shoes" onClick={white}/>
                    </div>
                    <div className="blue_img" onClick={blue} >
                        <img src={img3} alt="blue shoes"/>
                    </div>
                    <div className="yellow_img " onClick={yellow}>
                        <img src={img4} alt="yellow shoes"/>
                    </div>
                </div>
            </div>
            <div className="optiodiv">
                <p className="price">
                    {priceShoes} <span>&#8381;</span>
                </p>
                <div className="options_colors">
                    <p className="selection_color">Цвет:</p>
                    <svg className="black" onClick={black} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15.5" cy="15.5" r="15.5" fill="#39393A"/>
                    </svg>
                    <svg className="gray" onClick={white} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15.5" cy="15.5" r="15.5" fill="#B9B3B0"/>
                    </svg>
                    <svg className="blue" onClick={blue} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15.5" cy="15.5" r="15.5" fill="#5D70CE"/>
                    </svg>
                    <svg className="yellow"  onClick={yellow} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="15.5" cy="15.5" r="15.5" fill="#FF9200"/>
                    </svg>
                </div>
                <div className="order">
                    <div className="quantity_box">
                        <button className="minus" onClick={dec}>-</button>
                        <p className="quantity">{count}</p>
                        <button className="plus" onClick={inc}>+</button>
                    </div>
                    <p className="buy_click">Купить в 1 клик</p>
                    <div className="add_cart">
                        <svg className="add_cart_svg" width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.30933 2.68333L3.07332 1.26667H2.22615C2.09978 0.779334 1.66005 0.416667 1.13333 0.416667C0.5083 0.416667 0 0.924967 0 1.55C0 2.17503 0.5083 2.68333 1.13333 2.68333C1.66005 2.68333 2.09978 2.32067 2.22643 1.83333H2.59307L2.73473 2.68333H2.72397L4.18908 10.0545C3.49067 10.1078 2.90898 10.6456 2.84042 11.3222C2.80018 11.7203 2.93108 12.1189 3.19968 12.4153C3.46857 12.7125 3.85163 12.8833 4.25 12.8833H4.81667C4.81667 13.8209 5.57912 14.5833 6.51667 14.5833C7.45422 14.5833 8.21667 13.8209 8.21667 12.8833H11.3333C11.3333 13.8209 12.0958 14.5833 13.0333 14.5833C13.9709 14.5833 14.7333 13.8209 14.7333 12.8833H15.8667C16.0233 12.8833 16.15 12.7567 16.15 12.6C16.15 12.4433 16.0233 12.3167 15.8667 12.3167H14.6342C14.4001 11.6574 13.772 11.1833 13.0333 11.1833C12.2947 11.1833 11.6665 11.6574 11.4325 12.3167H8.1175C7.88347 11.6574 7.25532 11.1833 6.51667 11.1833C5.77802 11.1833 5.14987 11.6574 4.91583 12.3167H4.25C4.01143 12.3167 3.78193 12.2141 3.61987 12.0353C3.45638 11.8543 3.3796 11.6214 3.40425 11.3791C3.44732 10.9516 3.84228 10.617 4.30327 10.617H4.52738C4.53135 10.617 4.53447 10.617 4.53843 10.617H15.5867C16.3662 10.6167 17 9.98285 17 9.20368V2.68333H3.30933ZM1.13333 2.11667C0.820817 2.11667 0.566667 1.86252 0.566667 1.55C0.566667 1.23748 0.820817 0.983334 1.13333 0.983334C1.44585 0.983334 1.7 1.23748 1.7 1.55C1.7 1.86252 1.44585 2.11667 1.13333 2.11667ZM13.0333 11.75C13.6584 11.75 14.1667 12.2583 14.1667 12.8833C14.1667 13.5084 13.6584 14.0167 13.0333 14.0167C12.4083 14.0167 11.9 13.5084 11.9 12.8833C11.9 12.2583 12.4083 11.75 13.0333 11.75ZM6.51667 11.75C7.1417 11.75 7.65 12.2583 7.65 12.8833C7.65 13.5084 7.1417 14.0167 6.51667 14.0167C5.89163 14.0167 5.38333 13.5084 5.38333 12.8833C5.38333 12.2583 5.89163 11.75 6.51667 11.75ZM16.4333 9.20368C16.4333 9.67033 16.0537 10.05 15.587 10.05H4.76595L3.41445 3.25H16.4333V9.20368Z" fill="black"/>
                        </svg>
                        <Link  to='/basket' className="add_cart_title"   onClick={()=> {addbasket()}}>В корзину</Link>
                    </div>
                </div>
                <div className="description_block">
                    <p className="description">Описание</p>
                    <p className="specifications">Характеристики</p>
                    <p className="reviews">Отзывы</p>
                </div>
                <div className="features">
                    <div className="features_box_left">
                        <p className="category name">Категория:</p>
                        <p className="manufacturer name">Производитель</p>
                        <p className="guarantee name">Гарантия</p>
                    </div>
                    <div className="features_box_right">
                        <p className="product name">{description.category}</p>
                        <p className="brend name">{description.manufacturer}</p>
                        <p className="time name">{description.guarantee}</p>
                    </div>
                </div>
            </div>
</div>
    )
}
export default Contentcard