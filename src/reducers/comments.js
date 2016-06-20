import { SAVE_COMMENT } from '../actions/type';

export default function(state = [], action){
  switch(action.type) {
    case SAVE_COMMENT:
      return state.concat([action.payload]);
  }
  return state;
}
