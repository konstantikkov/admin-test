import React from 'react'
import './index.css'
import {CheckBoxDecorator} from "./decorator";
import {CheckBoxValue} from "./value";


export const CheckBox = ({value, isSelected, selectOption, option, class_ }) =>
    <div className='CheckBox' onClick={() => selectOption(value)}>
        <CheckBoxDecorator isSelected={isSelected}/>
        <CheckBoxValue class_={class_}>
            {option}
        </CheckBoxValue>
    </div>