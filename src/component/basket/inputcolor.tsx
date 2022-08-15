
import React, {ChangeEvent, useState } from 'react';

let df='gg'

// export const colorInp = (event: ChangeEvent<{ value: string }>) => {
//        const color=event?.currentTarget?.value
    
//        df=color
    
//     }

export function InputColor(){
    const [state, setState] = useState<string>('black ');
    const colorInp = (event: ChangeEvent<{ value: string }>) => {
        // const value=event?.currentTarget?.value
        const value=event.target.value;
        setState(value)
     }
      return(
      <>
           <select className='inputcolor' id="selcolor" onChange={colorInp}>
                <option selected disabled>---</option>
                <option value='black '>black</option>
                <option value='white'>white</option>
                <option value='blue  '>blue</option>
                <option value='yellow'>yellow</option>
            </select>
            <p >{state}</p>
           
      </>
   
    )
}