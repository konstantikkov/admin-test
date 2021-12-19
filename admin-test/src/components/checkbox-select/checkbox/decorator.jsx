import React from 'react'
import './decorator.css'


export const CheckBoxDecorator = ({isSelected}) =>
    <div className='CheckBoxDecoratorOuter'>
        <div className={`CheckBoxDecorator CheckBoxDecorator${isSelected? 'Selected': 'NonSelected'}`}>
        </div>
    </div>