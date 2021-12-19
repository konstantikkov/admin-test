import React, { useState, useCallback } from 'react'
import {CheckBox} from "./checkbox";

export const CheckBoxSelect = ({options, selectedOption, setSelectedOption, answer, answerVisible}) => {
    const selectOption = useCallback((key) => {
        setSelectedOption(prev => ({...prev, [key]: !prev[key]}))
    },[])

    const isAnswer = useCallback((key, answerVisible, isSelected) => {
        if(answerVisible){
            if(answer.find((ans) => ans === key)){
                if(isSelected){
                    return 'Success'
                }
                else{
                    return 'Error'
                }
            }
            else{
                if(isSelected){
                    return 'Error'
                }
            }
        }
        return ''
    },[])

    return(
        <div className='CheckBoxSelect'>
            {
                options.map((option, key) =>
                    <CheckBox key={key} class_={isAnswer(key, answerVisible, selectedOption[key])} value={key} isAnswer isSelected={selectedOption[key]} selectOption={selectOption} option={option}/>
                )
            }
        </div>)
}