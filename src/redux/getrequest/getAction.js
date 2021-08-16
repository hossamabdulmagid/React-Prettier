import { dataActionType } from "./getTypes";

import axios from "axios";

const url = `https://api.publicapis.org/entries`;

const dataStart = () => ({
  type: dataActionType.DATA_START,
});

const dataSuccess = (data) => ({
  type: dataActionType.DATA_SUCCESS,
  payload: data,
});

const dataError = (error) => {
  return {
    type: dataActionType.DATA_ERROR,
    payload: error,
  };
};

export const getData = () => {
  let hasError = false;
  return (dispatch) => {
    dispatch(dataStart());
    axios
      .get(url)
      .then((result, error) => {
        if (error) {
          hasError = true;
          dispatch(dataError(error));
        } else if (!hasError) {
          dispatch(dataSuccess(result.data.entries));
          console.log(
            result.data.entries,
            `result.data.entries from action Files`
          );
        }
      })
      .catch((error) => {
        if (error) {
          dispatch(dataError(error));
        }
      });
  };
};
