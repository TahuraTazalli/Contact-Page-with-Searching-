import axios from "axios";
import { ActionTypes } from "./ActionTypes";

export const loading = () => {
  return { type: ActionTypes.LOADING };
};

export const fetchedData = (data) => {
  return { type: ActionTypes.FETCH_DATA, payload: data };
};
export const fetchDetails = async (dispatch) => {
  dispatch(loading());
  const response = await axios.get(
    "https://randomuser.me/api/?results=20&amp;inc=name,picture,id,cell&amp;nat=in"
  );
  dispatch(fetchedData(response?.data));
};
