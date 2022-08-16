import React,{useState,ChangeEvent} from 'react'
import SelectColor from './selectColor';
export type optionItemType={
    valueColor:string,
    textColor:string
}
export const optionItem:Array<optionItemType>=[
    {valueColor:'black',textColor:'black'},
    {valueColor:'white',textColor:'white'},
    {valueColor:'blue',textColor:'blue'},
    {valueColor:'yellow',textColor:'yellow'},
]
const selectItame=optionItem.map((m)=>{
    return(
        
        <SelectColor
            valueColor={m.valueColor}
            textColor={m.textColor}
        />
    )
})
 function InputSelectColor ()  {
    const [text, setText] = useState('black ');
    const colorInp = (event: ChangeEvent<{ value: string }>) => {
        const value=event.target.value;
        setText(value)
     }
  return (
    <>
     <select className='inputcolor' id="selcolor" defaultValue={'black'}  onChange={colorInp}>
        {selectItame}
    </select>
    <p className='colortext'>{text}</p>  
    </>
   
  )
}
export default InputSelectColor;
// onChange={colorInp}