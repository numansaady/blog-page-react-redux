import { FILTERED_RESULT } from "./actionTypes";

const initialState = {
  searchText: "",
  category: "",
  author: "",
  duration: [],
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_RESULT:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default filtersReducer;
