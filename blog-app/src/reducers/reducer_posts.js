import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';
import _ from 'lodash';

export default function(state={}, action) {
  switch(action.type){
    case DELETE_POST:
      // look at state object, if state object has the specific post id then omit it
      return _.omit(state, action.payload);
    case FETCH_POST:
      // this is the long version of the single return line that follows
      // const post = action.payload.data;
      // const newState = {...state};
      // newState[post.id] = post;
      // return newState;

      // this single line uses key interpolation with square braces (not creating an array).
      // making new key:value pair and adding to existing state object
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    default:
    return state;
  }
}
