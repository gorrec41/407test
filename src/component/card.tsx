import Header from './header';
import Contentcard from './contentcard';

export  interface descriptionType{
    category:string,
    manufacturer:string,
    guarantee:string
}
export const description= {
    category:'Кроссовки',
    manufacturer:'Nike',
    guarantee:'2 года'
}

function Card(){
    return(
        <div className="card">
            <Header/>
            <Contentcard
                category={description.category}
                manufacturer={description.manufacturer}
                guarantee={description.guarantee}
            />
            
        </div>
    )
}
export default Card;