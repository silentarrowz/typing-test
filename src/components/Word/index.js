import React from 'react';
import './styles.css';

const Word = ({expected, actual, position,current}) => {
    // console.log('expected : ',expected)
    let className = '';
    let currentClass = position===current?'current':'';
    if(actual){
        if(expected === actual){
            className = `correct ${currentClass}`
        }else{
            className = `error ${currentClass}`;
        }
    }
    
    return(
        <span className={className}>{expected+' '}</span>
    )
}

export default Word;