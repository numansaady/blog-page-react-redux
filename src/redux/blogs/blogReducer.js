import initialState from "./initialState";

const blogReducer = (state=initialState, action) => {
    switch (action.type) {
        case "value":
            return [
                ...state,
            ]
    
        default:
            return state
    }
}

export default blogReducer;