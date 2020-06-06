
export const startTimer = () => {
    return{
        type:'START_TIMER',        
    }
}

export const stopTimer = () => {
    return {
        type: 'STOP_TIMER',        
    }
}

export const sendCurrentVal = (current, characters) => {
    return {
        type: 'UPDATE_CURRENT',
        payload:{
            current,
            characters
        }
    }
}