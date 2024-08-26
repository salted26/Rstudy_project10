
let initialState = {
    contactList:[],
    searchKeyword:'',
    deleteContact:{},
    editContact:{}
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
        case 'DELETE_CONTACT' :
            return {
                ...state,
                contactList: [
                    ...state.contactList.filter(deleteContact => deleteContact !== action.payload),
                ]
            }
        default:
            return {...state}
    }

}

export default reducer;