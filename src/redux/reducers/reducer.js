
const initialState = {
    empList: [],
    number: 1,
    inputSearch: '',
    searchDataList: []
}

const reducerFunData = (state = initialState, action) => {
    switch (action.type) {
        case "get_data_from_api":
            return { ...state, empList: [...state.empList, ...action.payload] }
        case "inc_num":
            return { ...state, number: state.number + 1 }
        case 'user_input':
            return { ...state, inputSearch: action.payload }
        case 'get_data_from_search_api':
            if ((action.payload).length === 0) {
                return { ...state, empList: [] }
            }
            return { ...state, searchDataList: [...action.payload] }
        default:
            return state;
    }
}

export default reducerFunData;