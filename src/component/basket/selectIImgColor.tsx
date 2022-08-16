import img from '../../../src/img/black.jpg'
import React from 'react';
export const SelectImgColor=()=>{
    return(
        <>
            <div className="wrapimgcolor">
                <img className='basketimg' src={img} alt='color'/>
            </div>
        </>
    
    )
}