import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Card from '../component/card';
import Basket from '../component/basket';

function Rout(){
    return (
        <Router>
                <Routes>
                    <Route path="/" element={<Card/>}/>
                    <Route path="/basket" element={<Basket/>}/>
                </Routes>
        </Router>
    );
}

export default Rout;