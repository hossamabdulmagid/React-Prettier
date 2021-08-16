import { dataActionType } from "./getTypes";

const INITIAL_STATE = {
  loading: false,
  getRequest: [],
  error: null,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dataActionType.DATA_START:
      return {
        ...state,
        loading: true,
      };
    case dataActionType.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        getRequest: action.payload,
      };

    case dataActionType.DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
