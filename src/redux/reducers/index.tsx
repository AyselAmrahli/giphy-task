import { combineReducers } from "redux";
import { 
  RECEIVE_RANDOM_GIF,
  RECEIVE_GIFS,
  RECEIVE_GIF_DETAIL
} from "../constants";

const GifReducer = (state = {}, action: any) => {
  switch (action.type) {
    case RECEIVE_RANDOM_GIF:
      return { ...state, randomGif: action.payload.gif};
    case RECEIVE_GIFS:
      return { ...state, gifs: action.payload.gifs};
    case RECEIVE_GIF_DETAIL:
      return { ...state, gifDetail: action.payload.gif};
    default:
      return state;
   }
};

const rootReducer = combineReducers({
  GifReducer,
});

export default rootReducer;