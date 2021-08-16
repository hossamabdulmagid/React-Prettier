import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dataReducer from "./getrequest/getReducer";
import postReducer from "./postrequest/postReducer";

//blacklist
const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

//whitelist

const rootReducer = combineReducers({
  get: dataReducer,
  post: postReducer,
});

export default persistReducer(persistConfig, rootReducer);
