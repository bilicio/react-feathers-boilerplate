import * as types from '../actions/types'

const defaultState = {
    photos : []
}

export default (state = defaultState, action={}) => {
  
    switch(action.type) {
      
        case types.LOAD_PHOTOS+'_FULFILLED': {
            return {
              ...state,
              photos: action.payload.data.data,
            }
          }

        default : 
            return state
        
    }
} 

