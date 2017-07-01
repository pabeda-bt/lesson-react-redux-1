import {LOAD_USER} from './constants.js'

const loadUser=(id)=>{
    return {
        type:LOAD_USER,
        value:id
    }
}

export {loadUser}