import { combineReducers } from "redux";
import FotosReducer from "./fotos-reducer";

const reducers = {
  fotosStore: FotosReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;