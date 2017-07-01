import {LOADED_USER} from './constants'

const reducer = (state=[], action)=>{
    if (action.type==LOADED_USER) {
        state = action.value
    }

    return state;
}

export default reducer;