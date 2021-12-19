import React from 'react'
import './value.css'

//import {TextInput} from "../../text-input";

export const CheckBoxValue = ({ value, children, class_ }) =>
    <div className={`CheckBoxValue ${class_}`}>
        {
            children
        }
    </div>