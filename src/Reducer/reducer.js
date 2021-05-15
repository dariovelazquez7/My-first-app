import {GET_CARD, GET_DEALS, LOADING} from "../Actions/actions"


const initialState = {
    gamesLoaded: [],
    dealsGames:[],
    loading: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_CARD:
        return{
            ...state,
            gamesLoaded: action.payload,
            loading: false
        }
      case GET_DEALS:
        return{
          ...state,
          dealsGames: action.payload
        }
      
        case LOADING:
          return{
            ...state,
            loading: true
          }
        
      default: return state
    }
  };
  
  export default rootReducer;