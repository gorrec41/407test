
import React, {ChangeEvent, useState } from 'react';

type optionItemType={
    value:string,
    text:string
}
const optionItem:Array<optionItemType>=[
    {value:'black',text:'black'},
    {value:'white',text:'white'},
    {value:'blue',text:'blue'},
    {value:'yellow',text:'yellow'},
]
const optionSelect=optionItem.map((m)=>{
    return(
        <option value={m.value}>{m.text}</option>
    )
})
export function InputColor(){
    const [text, setText] = useState('black ');
    const colorInp = (event: ChangeEvent<{ value: string }>) => {
        const value=event.target.value;
        setText(value)
     }
      return(
      <>
        <select className='inputcolor' id="selcolor" defaultValue={'black'} onChange={colorInp}>
            {optionSelect}
        </select>
        <p className='colortext'>{text}</p>       
      </>
    )
}