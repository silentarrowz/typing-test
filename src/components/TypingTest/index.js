import React, {useState} from 'react';
import {connect} from 'react-redux';
import Word from '../Word';
import {sendCurrentVal} from '../../redux/actions';
import {textToType} from '../../constants';
import './styles.css';


const TypingTest = ({timeStart, sendCurrentVal}) => {
    const [typed, setTyped] = useState('');
    const [current, setCurrent] = useState('');
    const [actualArr, setActualArr] = useState([]);
    
    const handleTyping = (e) => {
        if(timeStart){
            const typedText = e.target.value;
            const totalCharacters = typedText.length;
            const actualArr = typed? typed.split(' '):'';
            const current = actualArr.length -1;
            setTyped(typedText);
            setCurrent(current);
            setActualArr(actualArr);
            sendCurrentVal(current,totalCharacters);
        }
    }

    const typeArr = textToType.split(' ');       
    return(
        <div>
            <div>
                <div className='sample'>
                    {typeArr.map((word,i)=>
                    <Word 
                    key={i+word} 
                    expected={typeArr[i]} 
                    actual={actualArr[i]} 
                    position={i} 
                    current={current} 
                    />)}
                </div>
                
            </div>
            
            <textarea type="text" value={typed} className="typedText" onChange={handleTyping} />
          
           
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        timeStart: state.typing.timeStart,
        isReset: state.typing.isReset,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendCurrentVal: (current,characters) => dispatch(sendCurrentVal(current,characters))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypingTest);