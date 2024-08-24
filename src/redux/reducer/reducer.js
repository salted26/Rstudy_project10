
let initialState = {
    contactList:[],
    searchKeyword:'',
    deleteContact:'',
}

function reducer(state=initialState, action){
    switch(action.type){
        case 'ADD_CONTACT' :
            return {
                ...state,
                contactList : [
                    ...state.contactList,
                    {name: action.payload.name, phoneNumber: action.payload.phoneNumber}
                ]
            };
        case 'SEARCH_CONTACT' :
                return {
                    ...state,
                    searchKeyword : action.payload.searchKeyword
                }
        default:
            return {...state}
    }

}

export default reducer;