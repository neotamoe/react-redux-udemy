import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action){
  switch(action.type){
    case FETCH_WEATHER:
      // return state.push(action.payload.data) --> NO!  this manipulates state
      // return state.concat([action.payload.data]);  --> this is okay
      return [action.payload.data, ...state];  // --> this is ES6 syntax
  }
  return state;
}
