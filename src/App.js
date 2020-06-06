import React from 'react';
import {connect} from 'react-redux';

import TypingTest from './components/TypingTest';
import Timer from './components/Timer';
import DisplayScore from './components/DisplayScore';
import './App.css';

function App({timeStart,testOver, current}) {
  return (
    <div className="App">
      <header className="App-header">
       Typing Test
      </header>
      <div className='timerScore'>
        <Timer />
        
      </div>
      
      {!timeStart && testOver? <DisplayScore /> :<TypingTest />}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {    
    timeStart: state.typing.timeStart,
    testOver: state.typing.testOver,
    current: state.typing.current,
  }
}

export default connect(mapStateToProps,null)(App);

