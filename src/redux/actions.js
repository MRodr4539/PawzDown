// export const addPosting = (posting) => {
//     return {
//         type: 'ADD_POSTING',
//         value: posting
//     }
// }
export const getUniverses = () => {
    return dispatch => {
        fetch("/locationList")
        .then(res => res.json())
        .then(response => {
            // console.log(response)
            const action = {
                type: "GET_LOCATIONS",
                value: response
            };
            dispatch(action);
        })
        .catch(error => console.log(error));
    };
};