import { PostTypeAction } from "./postType";

const INITIAL_STATE = {
  pending: false,
  PostRequest: {},
  errorMessage: null,
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PostTypeAction.POST_DATA_START:
      return {
        ...state,
        pending: true,
      };
    case PostTypeAction.POST_DATA_SUCCESS:
      return {
        ...state,
        pending: false,
        PostRequest: action.payload,
      };
    case PostTypeAction.POST_DATA_ERROR:
      return {
        ...state,
        pending: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
