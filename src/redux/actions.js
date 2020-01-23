// export const addPosting = (posting) => {
//     return {
//         type: 'ADD_POSTING',
//         value: posting
//     }
// }
export const login = () => {
    return{
        type:'LOGIN',
        value: true
    }
}

export const logout = () => {
    return{
        type: 'LOGOUT',
        value: false  //*****//
    }
}