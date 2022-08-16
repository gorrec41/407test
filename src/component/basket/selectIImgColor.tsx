import img from '../../../src/img/white.jpg'
import React from 'react';
export const SelectImgColor=(value:any)=>{
    return(
        <>
            <div className="wrapimgcolor">
                <img className='basketimg' src={img} alt='color'/>
            </div>
        </>
    
    )
}