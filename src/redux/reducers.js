import { combineReducers } from 'redux'
// const user = (state = null) => state

const locations = (state = [], action) => {
    switch(action.type) {
        case 'GET_LOCATIONS':
            return action.value
        // case 'ADD_LOCATION':
        //     return [ ...state, action.value ]
//         case 'REMOVE_CAR':
//             const cars = [ ...state ]
//             cars.splice(action.value, 1)
//             return cars
        default:
            return state
    }
}

// const events = (state = [], action) => {
//     switch(action.type) {
//         case 'ADD_EVENT':
//             return [ ...state, action.value ]
//         default:
//             return state
//     }
// }

export default combineReducers({ locations })