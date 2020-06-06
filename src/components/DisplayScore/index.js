import React from 'react';
import {connect} from 'react-redux';
import './styles.css';

const DisplayScore = ({current, characters}) => { 
    const speed = (characters/5);
    return(
        <div className="score">
            <div>Your speed</div> 
            <div>{speed} words per minute.</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        current: state.typing.current,
        characters: state.typing.characters,
    }
}

export default connect(mapStateToProps, null)(DisplayScore);