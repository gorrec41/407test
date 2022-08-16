import {optionItem,optionItemType} from './inputSelectColor'

function SelectColor(optionItem:optionItemType){
        const {valueColor,textColor}=optionItem
        return(
            <option value={valueColor}>{textColor}</option>
        )
    
}

export default SelectColor;