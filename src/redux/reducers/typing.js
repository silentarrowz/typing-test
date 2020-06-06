const initialState = {
    current: '',
    characters:0,
    actualArr:[],
    timeLeft: false,
    timeStart: false,
    testOver: false,    
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        
        case 'START_TIMER':{
            return{
                ...state,
                timeStart:true,
                testOver: false,                 
            }
        }

        case 'STOP_TIMER':{
            return {
                ...state,
                timeStart: false,
                current:'',
                testOver: true,
            }
        }

        case 'UPDATE_CURRENT':{
            return {
                ...state,
                current:action.payload.current,
                characters: action.payload.characters,
            }
        }

        default:
            return state;
    }
   
}

export default reducer;