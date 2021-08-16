import { PostTypeAction } from "./postType";

const postdataStart = () => ({
  type: PostTypeAction.POST_DATA_START,
});
const postdataSuccess = (data) => ({
  type: PostTypeAction.POST_DATA_SUCCESS,
  payload: data,
});
const postdataError = (errorMessage) => ({
  type: PostTypeAction.POST_DATA_ERROR,
  payload: errorMessage,
});

export const postData = (information) => {
  console.log(information);
  console.log(`${information} has been called`);
  return (dispatch) => {
    dispatch(postdataStart(postdataStart));
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(information),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json, errorMessage) => {
        if (!json) {
          dispatch(postdataError(errorMessage));
        }
        dispatch(postdataSuccess(json));
        console.log(json);
      })
      .catch((errorMessage) => {
        console.log(errorMessage);
        dispatch(postdataError(errorMessage));
      });
  };
};
