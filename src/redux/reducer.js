import {SET_FILTER} from './types'
import users from '../data/users'

const initialStore = {
    users: users,
        filter: '',
}

const reducer = (store = initialStore, action) =>{
    switch (action.type){
        case SET_FILTER:
            return {...store, filter: action.payload}
        default:
            return store;
    }
}

export default reducer;