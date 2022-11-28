import { ActionTypes } from "../Action/ActionTypes";
const initialData = {
  detail: [],
  loading: false,
};
export const fetchDetailReducer = (state = initialData, action) => {
  switch (action.type) {
    case ActionTypes.LOADING: {
      return { ...state, loading: true };
    }
    case ActionTypes.FETCH_DATA: {
      return { ...state, detail: action.payload, loading: false };
    }
    default:
      return state;
  }
};
