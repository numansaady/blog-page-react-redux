import { FILTERED_RESULT } from "./actionTypes";

export const filteredResult = (category, filters) => {
    return {
      type: FILTERED_RESULT,
      payload: { [category]: filters },
    };
  };