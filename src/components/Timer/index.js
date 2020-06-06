import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';
import {startTimer, stopTimer} from '../../redux/actions';
import './styles.css';

const Timer = ({startTimer, stopTimer, timeStart}) => {
    const [time,setTime] = useState(60);
    const timerRef = useRef(null);
    React.useEffect(()=>{
        
        return ()=>{
            clearInterval(timerRef.current);
        }
    },[]);
   
    
    const handleTimer = () => {
        startTimer(); 
        timerRef.current = setInterval(()=>{
            setTime(time => {
                if(time>0){
                   return time=time-1;
                }else{
                    handleStopTest()                
                    return time;
                }
                
            });
       },1000);       
    }

    const handleStopTest = () => {
        clearInterval(timerRef.current);
        stopTimer();
        setTime(60);
    }
    const message = timeStart?"Time Left : ": '';
    return(
    <div>
        <div className='displayTime'> {`${message} ${time} secs`}</div>
        {timeStart?'':<button onClick={handleTimer}>Start Test</button>}
        {/* {timeStart?
        <button onClick={()=>handleStopTest()}>Stop/Reset Test</button>
        :<button onClick={handleTimer}>Start Timer</button>} */}
    </div>
        
    )
}

const mapStateToProps = (state)=>{
    return{
        timeStart: state.typing.timeStart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
      startTimer: () => dispatch(startTimer()),
      stopTimer: () => dispatch(stopTimer()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Timer);